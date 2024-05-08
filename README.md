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
- Deployed our app to production
- Created sign up user account
- Implemented sign in user API
- Created Redux store with user slice
- Impleted sign out
- Update Profile API call
- Bug fix: 1. Sign up user display name and profile picture update
           2. If the  user is not logged-in, redirect '/browse' to Login page ('/'), and vice-versa.
- Unsubscribed to the onAuthStateChange callback
- Add hardcoded values to constants file inside utils
- Register in TMDB API, create an app and get access token
- Get data from TMDB now playing movies list API
- Custom hook for Now playing Movies
- Create movieSlice
- Update store with movies data
- Planning data for MainContainer and Secondary Container
- Fetch data for Background video trailer inside MainContainer
- Update the trailer video data in the store
- Embed the youtube video and make it autoplay and mute
- Tailwind CSS to make the mainContainer look good
- 


* We might see a lot of things getting logged twice in our console in development because of React.strictmode. React does this extra rendering to check for any inconsistancy between calls in our app, it does not happen in production however, it only happens in development mode. It throws some error if it finds any issue.