import design from "../assets/products/design-tool.png";
import operation from "../assets/products/operation.png";
import portfolio from "../assets/products/portfolio.png";
import cart from "../assets/products/shopping-cart.png";
import social from "../assets/products/social-media.png";
import writing from "../assets/products/writing.png";

export const products = [
  {
    id: 1,
    name: "Design Tools",
    description: "Professional UI/UX design tools",
    price: 29,
    period: "monthly",
    tag: "popular",
    tagType: "Popular",
    features: ["100+ templates", "Export to PNG", "Cloud save"],
    icon: design,
  },
  {
    id: 2,
    name: "Operations Kit",
    description: "Manage workflows easily",
    price: 49,
    period: "monthly",
    tag: "best",
    tagType: "Best Seller",
    features: ["Task automation", "Analytics", "Team tools"],
    icon: operation,
  },
  {
    id: 3,
    name: "Portfolio Builder",
    description: "Create stunning portfolios",
    price: 19,
    period: "yearly",
    tag: "new",
    tagType: "New",
    features: ["Custom themes", "SEO ready", "Fast hosting"],
    icon: portfolio,
  },
  {
    id: 4,
    name: "E-Commerce Pack",
    description: "Start your online shop",
    price: 59,
    period: "monthly",
    tag: "popular",
    tagType: "Popular",
    features: ["Payment gateway", "Cart system", "Orders"],
    icon: cart,
  },
  {
    id: 5,
    name: "Social Media Kit",
    description: "Grow your audience",
    price: 25,
    period: "monthly",
    tag: "best",
    tagType: "Best Seller",
    features: ["Scheduler", "Analytics", "Templates"],
    icon: social,
  },
  {
    id: 6,
    name: "Content Writing",
    description: "AI powered writing tools",
    price: 15,
    period: "monthly",
    tag: "new",
    tagType: "New",
    features: ["Grammar check", "SEO tools", "Templates"],
    icon: writing,
  },
];
