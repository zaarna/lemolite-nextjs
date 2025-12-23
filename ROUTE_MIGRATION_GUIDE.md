# Next.js Route Migration Guide

## Overview
This document maps all routes from your React.js App.jsx to the corresponding Next.js App Router structure.

## Route Mapping

### ✅ Created Routes

#### Main Pages
- `/` → `src/app/page.js` (HomePage)
- `/about-us` → `src/app/about-us/page.js` (AboutUs)
- `/contact-us` → `src/app/contact-us/page.js` (ContactUs)
- `/casestudy` → `src/app/casestudy/page.js` (CaseStudy)
- `/life-at-lemolite` → `src/app/life-at-lemolite/page.js` (LifeAtLemolite)

#### Services Routes
- `/services` → `src/app/services/page.js` (Services)
- `/services/custom-software-development` → `src/app/services/custom-software-development/page.js` (Software)
- `/services/web-development` → `src/app/services/web-development/page.js` (Web)
- `/services/ui-ux-design` → `src/app/services/ui-ux-design/page.js` (Uiux)
- `/services/e-commerce` → `src/app/services/e-commerce/page.js` (E_commerce)
- `/services/mobile-app-development` → `src/app/services/mobile-app-development/page.js` (Mobile)
- `/services/ai-ml-development` → `src/app/services/ai-ml-development/page.js` (Aiml)
- `/services/internet-of-things` → `src/app/services/internet-of-things/page.js` (IOT_Development)
- `/services/chatbot-development` → `src/app/services/chatbot-development/page.js` (ChatBotDevelopement)
- `/services/voicebot-development` → `src/app/services/voicebot-development/page.js` (VoiceBotDevelopment)

#### Hire Developer Routes
- `/services/hire-python-developer` → `src/app/services/hire-python-developer/page.js` (Hire_python_developer)
- `/services/hire-mern-developer` → `src/app/services/hire-mern-developer/page.js` (Hire_mern_developer)
- `/services/hire-reactjs-developer` → `src/app/services/hire-reactjs-developer/page.js` (Hire_react_developer)

#### Tech Stack Routes
- `/techstack` → `src/app/techstack/page.js` (FutureTechPage)
- `/techstack/reactjs-development` → `src/app/techstack/reactjs-development/page.js` (Reactpage)
- `/techstack/angular-development` → `src/app/techstack/angular-development/page.js` (Angularpage)
- `/techstack/vuejs-development` → `src/app/techstack/vuejs-development/page.js` (Angularpage)

#### Blog Routes
- `/blog` → `src/app/blog/page.js` (MainBlogPage)
- `/blog/[blogId]` → `src/app/blog/[blogId]/page.js` (BlogDynamicPage) - Dynamic route

#### Career Routes
- `/careers` → `src/app/careers/page.js` (Career_Page)
- `/current-openings/lead-generation` → `src/app/current-openings/lead-generation/page.js` (LeadGerationPage)

### 🔄 Routes Still Need to be Created

#### Remaining Hire Developer Routes
- `/services/hire-nodejs-developer` → `src/app/services/hire-nodejs-developer/page.js` (Hire_node_developer)
- `/services/hire-php-developer` → `src/app/services/hire-php-developer/page.js` (Hire_php_developer)
- `/services/hire-laravel-developer` → `src/app/services/hire-laravel-developer/page.js` (Hire_laravel_developer)
- `/services/hire-vuejs-developer` → `src/app/services/hire-vuejs-developer/page.js` (Hire_vue_developer)
- `/services/hire-angular-developer` → `src/app/services/hire-angular-developer/page.js` (Hire_angular_developer)
- `/services/hire-shopify-developer` → `src/app/services/hire-shopify-developer/page.js` (Hire_shopify_developer)

#### Remaining Tech Stack Routes
- `/techstack/vuejs-development` → `src/app/techstack/vuejs-development/page.js` (VueTeckStack)
- `/techstack/nodejs-development` → `src/app/techstack/nodejs-development/page.js` (NodeTeckStack)
- `/techstack/laravel-development` → `src/app/techstack/laravel-development/page.js` (LaravelTeckStack)
- `/techstack/php-development` → `src/app/techstack/php-development/page.js` (PhpTechStack)
- `/techstack/mern-development` → `src/app/techstack/mern-development/page.js` (MernTeckStack)
- `/techstack/python-development` → `src/app/techstack/python-development/page.js` (PhythonTeckStack)
- `/techstack/shopify-development` → `src/app/techstack/shopify-development/page.js` (ShopifyTechStack)

#### Remaining Career Routes
- `/current-openings/business-development-executive` → `src/app/current-openings/business-development-executive/page.js` (BdePage)
- `/current-openings/quality-assurance` → `src/app/current-openings/quality-assurance/page.js` (QaPage)
- `/current-openings/full-stack-developer` → `src/app/current-openings/full-stack-developer/page.js` (FullStack)
- `/current-openings/business-analyst` → `src/app/current-openings/business-analyst/page.js` (BaPage)

#### CMS Routes
- `/privacy-policy` → `src/app/privacy-policy/page.js` (PrivecyPage)
- `/terms-conditions` → `src/app/terms-conditions/page.js` (Terms)
- `/sitemap` → `src/app/sitemap/page.js` (SiteMap)

#### Special Blog Routes
- `/blog/machine-learning-with-python` → `src/app/blog/machine-learning-with-python/page.js` (DetailBlogPage)

## Next Steps

1. **Create Remaining Routes**: Use the same pattern to create the remaining route files
2. **Migrate Components**: Replace placeholder content with actual migrated components
3. **Add Dependencies**: Install required packages like `framer-motion`, `react-toastify`
4. **Configure Tailwind**: Set up custom CSS classes and colors
5. **Test Routes**: Verify all routes work correctly

## Route Creation Pattern

For each new route, create a file following this pattern:

```jsx
// src/app/[route-path]/page.js
import React from 'react';

const ComponentName = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Page Title
        </h1>
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            Page description
          </p>
          <p className="text-gray-500">
            This is a placeholder for your ComponentName component.
            <br />
            Migrate your ComponentName component from React.js to replace this.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComponentName;
```

## Dynamic Routes

For dynamic routes like `/blog/[blogId]`, use the `[paramName]` folder structure and access parameters via the `params` prop:

```jsx
const DynamicPage = ({ params }) => {
  const { paramName } = params;
  // Use paramName in your component
};
```


