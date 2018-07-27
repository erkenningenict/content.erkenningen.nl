import CMS from "netlify-cms";

import PagePreview from "./preview-templates/PagePreview";
// import BlogPostPreview from "./preview-templates/BlogPostPreview";
// import ProductPagePreview from "./preview-templates/ProductPagePreview";

CMS.registerPreviewStyle("/styles.css");
CMS.registerPreviewTemplate("page", PagePreview);
// CMS.registerPreviewTemplate("products", ProductPagePreview);
// CMS.registerPreviewTemplate("blog", BlogPostPreview);
