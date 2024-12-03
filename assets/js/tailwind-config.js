
tailwind.config = {
  theme: {
    container: {
      screens: {
        xl: "1280px", // Set max-width to 1280px at xl (1280px) breakpoint
      },
      padding:{
        DEFAULT: '1rem',
      }
    },
    extend: {
      colors: {
        primary: "#191bfa",
        // secondary: colors.red,
      },
      fontFamily: {
        IRANSansX: "IRANSansX",
      },
    },
  },
};
