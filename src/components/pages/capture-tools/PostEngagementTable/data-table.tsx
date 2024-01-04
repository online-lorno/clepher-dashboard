import { type PostEngagement } from "@/redux/post-engagement/postEnagementState";
import { type RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import {
  type ColumnDef,
  type FilterFn,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState, Fragment, useEffect } from "react";
import { Button, Dropdown, Input, Join, Table, Tooltip } from "react-daisyui";
import {
  FaEdit,
  FaBackward,
  FaChevronLeft,
  FaChevronRight,
  FaForward,
  FaCaretDown,
} from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoText, IoTrash } from "react-icons/io5";
import { Link } from "react-router-dom";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

interface DataTableProps<TData, TValue> {
  columns: Array<ColumnDef<TData, TValue>>;
  data: TData[];
  handleShowCreate: () => void;
  handleRenameInit: (postEngagement: PostEngagement) => void;
  handleDeleteInit: (postEngagement: PostEngagement) => void;
  handleBulkDeleteInit: (postEngagements: PostEngagement[]) => void;
  resetBulkSelection: boolean;
  setResetBulkSelection: (bool: boolean) => void;
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export function DataTable<TData, TValue>({
  columns,
  data,
  handleShowCreate,
  handleRenameInit,
  handleDeleteInit,
  handleBulkDeleteInit,
  resetBulkSelection,
  setResetBulkSelection,
}: DataTableProps<TData, TValue>): JSX.Element {
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
      columnVisibility: {
        id: false,
      },
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableHiding: true,
  });

  // Reset bulk selection
  useEffect(() => {
    if (resetBulkSelection) {
      table.resetRowSelection();
      setResetBulkSelection(false);
    }
  }, [resetBulkSelection]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <span className="text-xl">Post Engagement Manager</span>
        <div className="flex space-x-2">
          <div className="form-control hidden md:flex">
            <Join>
              <Input
                size="sm"
                className="join-item border-r-0 border-neutral focus-within:outline-none focus:outline-none"
                placeholder="Search..."
                onChange={(event) => {
                  setGlobalFilter(event.target.value);
                }}
              />
              <div className="join-item border border-l-0 border-neutral bg-base-100 p-1">
                <IoIosSearch className="h-5 w-5" />
              </div>
            </Join>
          </div>
          <Button
            size="sm"
            variant="outline"
            color="primary"
            onClick={handleShowCreate}
          >
            Create New
          </Button>
          <Dropdown end className="hidden pr-3 md:block z-10">
            <Dropdown.Toggle button={false}>
              <Button size="sm" variant="outline" color="ghost">
                Bulk Actions
                <FaCaretDown className="h-4 w-4" />
              </Button>
            </Dropdown.Toggle>

            <Dropdown.Menu className="menu-compact mt-3 w-52">
              <Dropdown.Item
                onClick={() => {
                  const postEngagements = data.filter((_, index) => {
                    return table.getState().rowSelection[index];
                  });
                  handleBulkDeleteInit(postEngagements as PostEngagement[]);
                }}
              >
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="overflow-y-hidden overflow-x-scroll md:overflow-hidden">
        <Table size="sm">
          <thead className="text-sm uppercase text-base-content">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <Table.Body className="relative bg-base-100">
            <Fragment>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => {
                  const postEngagement = row.original as PostEngagement;

                  return (
                    <Table.Row
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <Fragment key={cell.id}>
                            {cell.column.id === "actions" ? (
                              <div className="flex space-x-2">
                                <Tooltip message="Edit">
                                  <Link
                                    to={`/capture-tools/post-engagement-builder/${postEngagement.id}`}
                                  >
                                    <Button
                                      size="sm"
                                      color="ghost"
                                      shape="circle"
                                    >
                                      <FaEdit className="h-4 w-4" />
                                    </Button>
                                  </Link>
                                </Tooltip>
                                <Tooltip message="Rename">
                                  <Button
                                    size="sm"
                                    color="ghost"
                                    shape="circle"
                                    onClick={() => {
                                      handleRenameInit(postEngagement);
                                    }}
                                  >
                                    <IoText className="h-4 w-4" />
                                  </Button>
                                </Tooltip>
                                <Tooltip message="Delete">
                                  <Button
                                    size="sm"
                                    color="ghost"
                                    shape="circle"
                                    onClick={() => {
                                      handleDeleteInit(postEngagement);
                                    }}
                                  >
                                    <IoTrash className="h-4 w-4" />
                                  </Button>
                                </Tooltip>
                              </div>
                            ) : (
                              flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext(),
                              )
                            )}
                          </Fragment>
                        );
                      })}
                    </Table.Row>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </td>
                </tr>
              )}
            </Fragment>
          </Table.Body>
        </Table>
      </div>
      <div className="flex justify-center gap-4">
        <Button
          shape="circle"
          size="sm"
          color="primary"
          onClick={() => {
            table.setPageIndex(0);
          }}
          disabled={!table.getCanPreviousPage()}
        >
          <FaBackward className="h-4 w-4" />
        </Button>
        <Button
          shape="circle"
          size="sm"
          color="primary"
          onClick={() => {
            table.previousPage();
          }}
          disabled={!table.getCanPreviousPage()}
        >
          <FaChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          shape="circle"
          size="sm"
          color="primary"
          onClick={() => {
            table.nextPage();
          }}
          disabled={!table.getCanNextPage()}
        >
          <FaChevronRight className="h-4 w-4" />
        </Button>
        <Button
          shape="circle"
          size="sm"
          color="primary"
          onClick={() => {
            table.setPageIndex(table.getPageCount() - 1);
          }}
          disabled={!table.getCanNextPage()}
        >
          <FaForward className="h-4 w-4" />
        </Button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            min={1}
            className="border p-1 rounded w-16"
          />
        </span>
      </div>
    </div>
  );
}
