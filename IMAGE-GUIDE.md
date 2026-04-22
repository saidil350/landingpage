# Image Preparation Guide - MRS Plastic Packaging Website

## Current Status
✅ Website is fully functional with **placeholder images**
⚠️ Replace placeholder images with actual images for production

---

## Images Needed & Where to Place Them

### 1. Industry Images (8 images)
**Location**: `d:/landing page/public/industries/`
**Size**: 1920x1080px (landscape)
**Format**: JPG or PNG

| Filename | Purpose | Suggested Content |
|----------|---------|-------------------|
| `food-beverage.jpg` | Food & Beverage industry showcase | Food packaging products, F&B facility |
| `retail-ecommerce.jpg` | Retail & E-commerce industry | Shopping bags, courier bags, retail packaging |
| `healthcare.jpg` | Healthcare & Pharma industry | Medical packaging, sterile bags |
| `industrial.jpg` | Industrial manufacturing | Heavy duty packaging, factory shots |
| `agriculture.jpg` | Agriculture industry | Fertilizer bags, seed packaging |
| `chemical.jpg` | Chemical industry | Chemical drums, hazmat packaging |
| `personal-care.jpg` | Personal care industry | Cosmetics packaging, diaper packaging |
| `custom.jpg` | Custom solutions | Custom packaging examples |

### 2. Project Images (3 images)
**Location**: `d:/landing page/public/projects/`
**Size**: 1920x1080px (landscape)
**Format**: JPG or PNG

| Filename | Project | Suggested Content |
|----------|---------|-------------------|
| `food-packaging.jpg` | PT Food Indonesia | Food grade packaging examples |
| `industrial-packaging.jpg` | PT Manufacturing Jaya | Industrial packaging facility |
| `ecommerce-packaging.jpg` | PT E-Commerce Asia | Courier bags, e-commerce packaging |

### 3. Certification Images (5 images)
**Location**: `d:/landing page/public/certifications/`
**Size**: 1000x1400px (portrait)
**Format**: High-res scans or JPG

| Filename | Certification | Content |
|----------|--------------|---------|
| `iso-9001.jpg` | ISO 9001:2015 | ISO certificate scan |
| `halal.jpg` | Halal MUI | Halal certificate from MUI |
| `sni.jpg` | SNI | SNI certificate |
| `food-grade.jpg` | Food Grade | BPOM food grade certificate |
| `recycling.jpg` | Recycling Standard | Recycling certification |

---

## How to Replace Images

### Step 1: Prepare Your Images
1. Ensure images are the correct size
2. Save in appropriate format (JPG for photos, PNG for graphics)
3. Optimize for web (use tools like TinyPNG, ImageOptim)

### Step 2: Place Images in Directories
```bash
# Industries
d:/landing page/public/industries/food-beverage.jpg
d:/landing page/public/industries/retail-ecommerce.jpg
d:/landing page/public/industries/healthcare.jpg
# ... (all 8 industry images)

# Projects
d:/landing page/public/projects/food-packaging.jpg
d:/landing page/public/projects/industrial-packaging.jpg
d:/landing page/public/projects/ecommerce-packaging.jpg

# Certifications
d:/landing page/public/certifications/iso-9001.jpg
d:/landing page/public/certifications/halal.jpg
d:/landing page/public/certifications/sni.jpg
d:/landing page/public/certifications/food-grade.jpg
d:/landing page/public/certifications/recycling.jpg
```

### Step 3: Update Image References
Edit the files in `d:/landing page/src/data/`:

1. **Open**: `src/data/industries.ts`
2. **Replace**: Change from `placeholderImages['food-beverage']` back to `'/industries/food-beverage.jpg'`
3. **Repeat**: Do the same for `projects.ts` and `certifications.ts`

**Example**:
```typescript
// BEFORE (using placeholders)
image: placeholderImages['food-beverage'],

// AFTER (using actual images)
image: "/industries/food-beverage.jpg",
```

### Step 4: Rebuild
```bash
cd "d:/landing page"
npm run build
npm run dev
```

---

## Quick Alternative: Update One File

To quickly switch from placeholders to local images, edit this file:
**`d:/landing page/src/data/placeholders.ts`**

Change the URLs from external placeholder services to local paths:

```typescript
export const placeholderImages = {
  // Industries
  'food-beverage': '/industries/food-beverage.jpg',  // Changed from external URL
  'retail-ecommerce': '/industries/retail-ecommerce.jpg',
  // ... etc
};
```

This way you don't need to edit multiple files!

---

## Current Placeholder Sources

**Industries**: Using Unsplash (free stock photos)
**Certifications**: Using placehold.co (placeholder service)

These are temporary and will be replaced automatically once you add the actual images to the directories above.

---

## Image Guidelines

### Quality Standards
- **Resolution**: Minimum 1920x1080 for industries/projects
- **File Size**: Keep under 500KB per image (optimize for web)
- **DPI**: 72 DPI (web standard)

### Style & Branding
- Use consistent lighting and color grading
- Show actual MRS products/facilities when possible
- Include branding/logos where appropriate
- Professional, clean aesthetic

### Content Suggestions
- **Industries**: Show packaging examples, not generic stock photos
- **Projects**: Before/after or installation photos
- **Certifications**: High-quality, readable certificate scans

---

## Need Help?

**Current Status**: Site works with placeholders ✅
**Next Step**: Replace with actual images when ready

The site is fully functional now. You can replace images at your own pace - each section will work independently!
