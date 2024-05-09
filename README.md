# Netflix GPT

- Create react app
- Configure Tailwind CSS
- Routing
- Header
- Sign In/Login Form
- Sign Up Form
- Form Validation (We can use libraries too for form validations like Formik when working with big forms)
- useRef hook
- firebase setup
- Deployed our app to production
- Created sign up user account
- Implemented sign in user API
- Created Redux store with user slice
- Impleted sign out
- Update Profile API call
- Bug fix: 
1. Sign up user display name and profile picture update
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
- Build Secondary Container Component
- Build Movie List
- Build Movie Card
- TMDB image CDN URL 
- Made the browse page look good with Tailwind CSS
- Custom hooks for Popular Movies, Top Rated Movies, and Upcoming Movies 
- GPT search Page
- GPT searchbar
- Multi-language feature on GPT search page

FINDINGS:
1. When I was using button tag inside my form to switch between sign in and sign up form, the page was getting refreshed on every click of the button, that's because the form was trying to get submitted but we don't want the form to submit as a result of sign in/sign up form view toggle so we have to use 'onSubmit={(e) => e.preventDefault()}' inside form tag. This is not a React problem, it's a web problem.

2. We might see a lot of things getting logged twice in our console in development because of React.strictmode. React does this extra rendering to check for any inconsistancy between calls in our app, it does not happen in production however, it only happens in development mode. It throws some error if it finds any issue.

TO BE ADDED:
- left and Right scroll buttons on movie card
- After login make the header navmenu opaque
- Make the secondary container overlap a bit on main container, to hide the video playing scrollbar inside main container. (Movie List is already overlapping the main container but the video play scroll is visible between the cards, so need the secendary container to overlap to make the look and feel good)