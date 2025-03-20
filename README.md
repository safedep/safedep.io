# 🚀 SafeDep on AstroWind

## Usage

Install dependencies:

```shell
npm install
```

Start development server

```shell
npm start
```

Build static site

```shell
npm run build
```

## How to write a blog post

1. Create a new `.mdx` file in `src/content/post/`.
2. Add frontmatter with required fields:

   ```yaml
   ---
   publishDate: 2024-01-01T00:00:00Z
   title: 'Your Post Title'
   excerpt: A brief summary of your post that will display in previews.
   image: /images/your-featured-image.jpg
   tags:
     - tag1
     - tag2
   draft: true # Set to false to publish
   ---
   ```

3. **Author Information** (optional):

   Simple format:

   ```yaml
   author: John # required
   ```

   Enhanced format:

   ```yaml
   author:
     name: Jane Doe
     photo: /images/authors/jane-doe.jpg # Local path or full URL
     linkedin: https://linkedin.com/in/jane-doe
     twitter: https://twitter.com/janedoe
     github: https://github.com/janedoe
   ```

4. Write your content using Markdown and import components as needed:

   ```mdx
   import CallToAction from '~/components/widgets/CallToAction.astro';
   import { Image } from 'astro:assets';
   import MyImage from './assets/my-image.png';

   ## Heading

   Regular paragraph with **bold** and _italic_ text.

   <Image src={MyImage} alt="Description" />

   <CallToAction title="Take Action" callToAction={{ text: 'Learn More', href: '/link' }} />
   ```

5. To publish, change `draft: false` in the frontmatter.
