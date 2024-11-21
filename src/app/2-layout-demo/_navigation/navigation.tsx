const getDefaultTopNavigation = () => {
  return [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/product" },
    { name: "Blog", href: "/blog" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Forgot Password", href: "/forgot-password" },
  ];
};

export default getDefaultTopNavigation;
