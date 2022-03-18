module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lzViolet: "#7E33E0",
        lzNavGrey: "#F1F1F1",
        lzNavBlack: "#0D0E43",
        lzNavPink: "#FB2E86",
        lzSearchBlue: "#E7E6EF",
        lzHeroBg: "#F6F5FF",
        lzheroBlack: "#101750",
        lzTableBlue: "#1D3178",
        lzItemBorder: "#E1E1E4",
        lzItemDetails: "#A1A8C1",
        lzPriceBlue: "#15245E",
        lzQuantityContol: "#E7E7EF",
        lzQuantityControlButtons: "#BEBFC2",
        lzQuantityGrey: "#F0EFF2",
        lzFooterBg: "#EEEFFB",
        lzSubtotalBorder: "#E8E6F1",
        lzGreen: "#19D16F",
        lzSuccessTxt: "#8D92A7",
        lzFooterText: "#8A8FB9",
        lzLFooterBg: "#E7E4F8",
        lzCopyGrey: "#9DA0AE"
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        JosefinSans: ["Josefin Sans", "sans-serif"],
        Lato: ["Lato", "sans-serif"]
      }
    }
  },
  plugins: []
};
