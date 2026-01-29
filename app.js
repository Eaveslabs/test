


let tpl = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Test Article for SEO",
  "author": {
    "@type": "Person",
    "name": "Jane Doe"
  },
  "datePublished": "2026-01-29",
  "dateModified": "2026-01-29",
  "publisher": {
    "@type": "Organization",
    "name": "Example Publisher",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "description": "This is a test article used to validate JSON-LD structured data with Google SEO tools."
}`;



let scr = document.createElement('script');
scr.type = "application/ld+json";
scr.innerHTML = tpl;
document.head.append(scr);
