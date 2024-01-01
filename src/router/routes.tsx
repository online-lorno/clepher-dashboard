import CaptureToolsLayout from "@/layouts/CaptureToolsLayout";
import MasterLayout from "@/layouts/MasterLayout";
import Page404 from "@/pages/Status/Page404";
import { type AppRouteObject } from "@/router/interface";
import { lazy } from "react";

// Lazy load the routes to improve performance
// const Home = lazy(() => import("@/pages/Home"));
const DefaultPage = lazy(() => import("@/pages/DefaultPage"));
const DefaultCaptureToolsPage = lazy(
  () => import("@/pages/capture-tools/DefaultCaptureToolsPage"),
);
const PostEngagementPage = lazy(
  () => import("@/pages/capture-tools/PostEngagementPage"),
);
const PostEngagementBuilderPage = lazy(
  () => import("@/pages/capture-tools/PostEngagementBuilderPage"),
);

const routes: AppRouteObject[] = [
  {
    path: "/",
    element: <MasterLayout />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <DefaultPage />,
      },
      {
        path: "/audience",
        element: <DefaultPage />,
      },
      {
        path: "/livechat",
        element: <DefaultPage />,
      },
      {
        path: "/capture-tools",
        element: <CaptureToolsLayout />,
        errorElement: <Page404 />,
        children: [
          {
            path: "/capture-tools/links-library",
            element: <DefaultCaptureToolsPage />,
          },
          {
            path: "/capture-tools/customer-chat",
            element: <DefaultCaptureToolsPage />,
          },
          {
            path: "/capture-tools/json-library",
            element: <DefaultCaptureToolsPage />,
          },
          {
            path: "/capture-tools/checkbox-plugin",
            element: <DefaultCaptureToolsPage />,
          },
          {
            path: "/capture-tools/messenger-code",
            element: <DefaultCaptureToolsPage />,
          },
          {
            path: "/capture-tools/post-engagement",
            element: <PostEngagementPage />,
          },
          {
            path: "/capture-tools/send-to-messenger",
            element: <DefaultCaptureToolsPage />,
          },
        ],
      },
      {
        path: "/broadcasts",
        element: <DefaultPage />,
      },
      {
        path: "/magic",
        element: <DefaultPage />,
      },
      {
        path: "/analytics",
        element: <DefaultPage />,
      },
      {
        path: "/settings",
        element: <DefaultPage />,
      },
      {
        path: "/capture-tools/post-engagement-builder/:id",
        element: <PostEngagementBuilderPage />,
      },
    ],
  },
];

export default routes;
