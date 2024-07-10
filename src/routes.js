import App from "./App";
import Tours from "./components/Tours/tours";
import Tour from "./components/Tour/tour";

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        
      ],
    },
    {
        path: "tours",
        children: [
          {
            index: true,
            element: <Tours />,
            },
          {
            path: "/tours/:id", 
            element: <Tour />,
          },
        ],
      },
  ];
  export default routes;