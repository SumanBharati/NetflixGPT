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
- Header
- Sign In/Login Form
- Sign Up Form
* When I was using button tag inside my form to switch between sign in and sign up form, the page was getting refreshed on every click of the button, that's because the form was trying to get submitted but we don't want the form to submit as a result of sign in/sign up form view toggle so we have to use 'onSubmit={(e) => e.preventDefault()}' inside form tag. This is not a React problem, it's a web problem.

- Form Validation 
* We can use libraries too for form validations like Formik when working with big forms.

- useRef hook
- firebase setup
- deployed our app to production