import {
  Platform,
  type PostEngagement,
} from "@/redux/post-engagement/postEnagementState";
import { type ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "react-daisyui";

export const columns: Array<ColumnDef<PostEngagement>> = [
  {
    accessorKey: "id",
  },
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        size="sm"
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={table.getIsSomePageRowsSelected()}
        onChange={(e) => {
          const checked = e.target.checked;
          table.toggleAllPageRowsSelected(!!checked);
        }}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        size="sm"
        checked={row.getIsSelected()}
        onChange={(e) => {
          const checked = e.target.checked;
          row.toggleSelected(!!checked);
          console.log("checked: ", checked, row.getValue("id"));
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "platform",
    header: "Platform",
    cell: ({ row }) => {
      const platform = row.getValue("platform");
      return (
        <>
          <div className="h-4 w-4">
            {platform === Platform.MESSENGER && (
              <img src="/images/icon-messenger.svg" alt="messenger-svg" />
            )}
          </div>
        </>
      );
    },
  },
  {
    header: "Total Engaged/Unique",
    cell: () => <span>14/3</span>,
  },
  {
    header: "Acquired Subscribers",
    cell: () => <span>0</span>,
  },
  {
    header: "Conversion Rate",
    cell: () => <span>0%</span>,
  },
  {
    id: "actions",
    header: "Actions",
  },
];
