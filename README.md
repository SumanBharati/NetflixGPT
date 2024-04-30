# Netflix GPT

- Create react app
- Configure Tailwind CSS
- Routing
  - npm i -D react-router-dom
  Code sample:  import { createBrowserRouter, RouterProvider } from "react-router-dom";

                const Body = () => {
                    const appRouter = createBrowserRouter([
                        {
                            path: '/',
                            element: <Login />,
                        },
                        {
                            path: '/browse',
                            element: <Browse />,
                        }
                    ]);

                    return (
                        <div>
                            <RouterProvider router={appRouter} />
                        </div>
                    );
                };