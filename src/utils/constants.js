export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/5030300f-ed0c-473a-9795-a5123d1dd81d/US-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_0941c399-f3c4-4352-8c6d-0a3281e37aa0_medium.jpg";

export const PROFILE_PICTURE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEVyrxD///9urQBvrQBqqwBwrgZzsAD9/vvz+On1+e3r893w9uX6/PXl8NTg7cy82JTD3J94sxWEuTPV57yy0oW/2ZmgyGeSwE7O47F8tSSJvD7a6sOVwlSqznabxV+u0H3I36irznvj79GKvEKky2rE3KSaxGOMvUiWwlq3grncAAAEMklEQVR4nO3b6XbiOBAFYFyWd/BubHkDAhl4/yccQ0iGYEEg6RJp5n4/+/Q5N4U2tDCZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwI9ZRHaS2ESWhjDahw1ZpCHryKJ0kfmu62d5yl4j2W0RBq47W84TXTWSLDzjyIslb6woG+c9bNbZOvrMkOkbJ4Kd4AyLpqdhWWIyhr1n9p8yDcPZ8JUoqs9Zxoy5ywzM+qzAocQtV6oozrOMxmbK+kD+KNTwmVKpHWcZEXMjUqcINXKefipmiixP8s42qiY0DJelEalXZRkF58w2MUtlqNFydJ3RNMM7Jo6hubrCmONztZX9xTBYu6lYqkMzhgot6anDSs41UWTq0JCjwnS0Lr2Zc86mF4aG0bBUeKENe9YKx0vwQcUxDpNAHVZzjkPaqEMXLHNpqMyaJgxZHyypHhss05uIlFkN82ZGORA5huHFj5N1GA7dNHXGmU7NM3+LWPVpcn/1VnUdlvV+T7HmT1lXwwMaLYl8nyrVowWj4z/JsJKzodgkfLM3le7n8bDScVRjUX4S60WsZ1Eks5OBP2tZ9xX/EWnsH6Y5x49T5kyL+sw7FDkNV9oO24ZYWXZ53rVSwyEmmWm/yBfz2tZ4YDowaaDh4GvP2mdpOXwGAAAAAAB4Dk++gyJKpJwIvftgfSxh7pYz1315XWs6q9GLSK7eL/WdQtPRgkZE6+L0Hmr5XB2VRNJnZxcYiyfqqCTWhT+6KvFYL9g0GppvFSrvnzbP0E9J2LvlhXtunjtnrYby2vjCJfcez4WlNofyxoPvSSq0hLDnVXC1PIPxxvI2ZH5vHrBIUJqrp5Yz6wcu+qZI6rJO7v32SEPXlF11ZeidCh84lYq62s9/XrWzby1yaDphr7tq9lXX/DBlejdwC7H4+DOD5dwW4urt29Bww/9Iuzh0rxV0ztF1T6r6k8+eLvrVqjb3ZYj97dibYZQe/8Wu53F2fc5UCbkvZa8wt6pZIgizYrFp1+mbuuw3eZw1/i0zysi0WosHboPpwru+P8bPpXjk1smSdw2nuzW9/cj2m1x+Iv1HeK/1488vaMdV3rSZ0+PrY2tDZ5anv6G8yZVHvT8pz4/LR4++E+aFV+Df5r229kMnz3NUfmuNU3P86p+bv/lpQ+pXvffzwqi9+9u7FmZ095ewESfIFvXv6pynqG1+VKMX5q00df7k924mbV8v/Jrny7Z7KXZS6w+av4nEpC3CuxaOqRsuu60cNhy/Zl24zjKFnc6jJvh6ap26syrabKV9fSf5Gx1+sb/u82Xou+NCHS/wX6qo67fSGkad+Zc03djhXagt03rbb7pFHkV5nq82fbutU5nQE70atd6ewIrjZn/Y5VvPURgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/N/9C78IMOpGLVJcAAAAAElFTkSuQmCC";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const GEMINI_AI_KEY = process.env.REACT_APP_GEMINIAI_KEY;
