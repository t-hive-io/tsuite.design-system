# Figma API Scopes Documentation

This document describes all available Figma API scopes for Personal Access Tokens and what each scope provides access to.

## Current Status

**Organization Plan**: Active
**Token Type**: Personal Access Token
**Issue**: `file_variables:read` scope not available in token creation UI

## Available Scopes

### Users

**Scope Name**: User information
**API Access**: Read the current user's name, email, and profile image
**Endpoints**:

- `GET /v1/me` - Get current user information

---

### Files - Comments

#### Read Comments

**Scope Name**: Read comments
**API Access**: Read comments in accessible files
**Endpoints**:

- `GET /v1/files/{file_key}/comments` - Get comments on a file

#### Write Comments

**Scope Name**: Write comments
**API Access**: Create, modify, and delete comments in accessible files
**Endpoints**:

- `POST /v1/files/{file_key}/comments` - Post a new comment
- `DELETE /v1/files/{file_key}/comments/{comment_id}` - Delete a comment

---

### Files - Content

#### Read File Contents

**Scope Name**: Read file contents
**API Access**: Read the contents of and render images from files
**Endpoints**:

- `GET /v1/files/{file_key}` - Get file document
- `GET /v1/images/{file_key}` - Render images from file nodes
- `GET /v1/files/{file_key}/nodes` - Get specific nodes from file

#### Read File Metadata

**Scope Name**: Read file metadata
**API Access**: Read metadata of files
**Endpoints**:

- `GET /v1/files/{file_key}` - Get basic file information
- `GET /v1/files/{file_key}/versions` - Get version history

#### Read File Version History

**Scope Name**: Read version history
**API Access**: Read version history of files
**Endpoints**:

- `GET /v1/files/{file_key}/versions` - Get all versions of a file

---

### Design Systems

#### Read Individual Components and Styles

**Scope Name**: Read data about individual components and styles
**API Access**: Read component and style information from individual files
**Endpoints**:

- `GET /v1/files/{file_key}/components` - Get components in file
- `GET /v1/files/{file_key}/styles` - Get styles in file
- `GET /v1/files/{file_key}/component_sets` - Get component sets

#### Read Published File Components

**Scope Name**: Read components and styles published from individual files
**API Access**: Read published components and styles from a specific file
**Endpoints**:

- `GET /v1/files/{file_key}/components` - Get published components
- `GET /v1/files/{file_key}/styles` - Get published styles

#### Read Team Library

**Scope Name**: Read components and styles published in team libraries
**API Access**: Read all published components and styles in team libraries
**Endpoints**:

- `GET /v1/teams/{team_id}/components` - Get team library components
- `GET /v1/teams/{team_id}/styles` - Get team library styles

---

### Development

#### Write Component Code

**Scope Name**: Write and change component code
**API Access**: Create and modify code connections for components
**Endpoints**:

- Code Connect API endpoints (for publishing component code connections)

#### Read Dev Resources

**Scope Name**: Read and list dev resources in accessible files
**API Access**: Read development resources attached to design files
**Endpoints**:

- `GET /v1/files/{file_key}/dev_resources` - Get dev resources

#### Write Dev Resources

**Scope Name**: Create and modify dev resources in accessible files
**API Access**: Create, update, and delete dev resources
**Endpoints**:

- `POST /v1/files/{file_key}/dev_resources` - Create dev resource
- `PUT /v1/files/{file_key}/dev_resources/{dev_resource_id}` - Update dev resource
- `DELETE /v1/files/{file_key}/dev_resources/{dev_resource_id}` - Delete dev resource

---

### Projects

**Scope Name**: Read team project structure
**API Access**: Read project and file organization
**Endpoints**:

- `GET /v1/teams/{team_id}/projects` - Get team projects
- `GET /v1/projects/{project_id}/files` - Get files in project

---

### Webhooks

#### Read Webhooks

**Scope Name**: Read and list webhooks
**API Access**: View configured webhooks
**Endpoints**:

- `GET /v2/webhooks` - List team webhooks
- `GET /v2/webhooks/{webhook_id}` - Get specific webhook

#### Write Webhooks

**Scope Name**: Create, modify, and delete webhooks
**API Access**: Full webhook management
**Endpoints**:

- `POST /v2/webhooks` - Create webhook
- `PUT /v2/webhooks/{webhook_id}` - Update webhook
- `DELETE /v2/webhooks/{webhook_id}` - Delete webhook

---

## Missing Scopes

### File Variables (⚠️ NOT AVAILABLE)

**Expected Scope Name**: `file_variables:read` or similar
**Expected API Access**: Read Figma Variables from files
**Expected Endpoints**:

- `GET /v1/files/{file_key}/variables/local` - Get local variables
- `GET /v1/files/{file_key}/variables/published` - Get published variables

**Status**: ❌ This scope does NOT appear in the Personal Access Token creation UI, even with Organization plan

**Error When Accessing Without Scope**:

```
Status: 403 Forbidden
Error: "Invalid scope(s): [current_scopes]. This endpoint requires the file_variables:read scope"
```

---

## Current Token Configuration

Our current token has these scopes:

- ✅ `file_comments:read` - Read comments
- ✅ `file_content:read` - Read file contents
- ✅ `file_metadata:read` - Read file metadata
- ✅ `file_versions:read` - Read version history
- ✅ `library_assets:read` - Read individual components/styles
- ✅ `library_content:read` - Read published file components
- ✅ `team_library_content:read` - Read team library
- ✅ `file_dev_resources:read` - Read dev resources
- ✅ `projects:read` - Read projects
- ✅ `webhooks:read` - Read webhooks
- ❌ `file_variables:read` - **NOT AVAILABLE**

---

## Why Variables API is Not Available

**TL;DR**: `file_variables:read` and `file_variables:write` scopes are **Enterprise plan only** features.

According to [Figma Forum discussions](https://forum.figma.com/ask-the-community-7/why-s-the-variables-api-only-available-on-enterprise-plans-36426) and [official Figma documentation](https://developers.figma.com/docs/rest-api/variables-endpoints/):

- The Variables API endpoints are **Tier 2** (read) and **Tier 3** (write) endpoints
- These require `file_variables:read` and `file_variables:write` scopes
- **These scopes are ONLY available to Enterprise plan customers**
- Organization plan customers **cannot** access these scopes

This has caused significant frustration in the Figma community, as many teams on Organization plans cannot programmatically sync their Variables to code.

## Workarounds for Variables API

Since `file_variables:read` scope requires Enterprise plan, here are alternative approaches:

### Option 1: Manual Export (✅ Current Solution - RECOMMENDED)

**Export Variables from Figma UI**

1. Open Figma file
2. Right panel → Local variables (4-dots icon)
3. For each variable collection (TMHE, Vanderlande, Bastian Solutions, White-label)
4. Click collection → Export → Choose `.tokens.json` format
5. Place exported files in `src/tokens/figma-exports/`
6. Run `npm run figma:variables` to transform to TypeScript

**Pros**:

- ✅ Works immediately with any Figma plan
- ✅ Full control over what gets exported
- ✅ No additional costs
- ✅ Simple and reliable

**Cons**:

- ❌ Manual process
- ❌ Requires re-export when Variables change
- ❌ No automated sync

**Best for**: Teams on Organization plan who update Variables infrequently

---

### Option 2: Figma Plugin API (⭐ BEST AUTOMATION WITHOUT ENTERPRISE)

**Build a Figma plugin to export Variables**

According to [Figma Forum](https://forum.figma.com/ask-the-community-7/how-to-detect-enterprise-status-before-oauth-or-handle-file-variables-read-scope-errors-46912), the **Plugin API can access Variables without Enterprise plan**.

**Implementation**:

1. Create a Figma plugin using [Plugin API](https://www.figma.com/plugin-docs/working-with-variables/)
2. Plugin reads `figma.variables.getLocalVariableCollections()`
3. Plugin exports Variables to `.tokens.json` format
4. Save to repository or trigger webhook
5. Auto-transform with `npm run figma:variables`

**Pros**:

- ✅ Works with Organization plan
- ✅ Can be semi-automated (run plugin on schedule)
- ✅ Access to all Variables without REST API
- ✅ Can be triggered by team members

**Cons**:

- ❌ Requires building a custom plugin
- ❌ Still requires manual plugin execution (unless using webhooks)
- ❌ More complex setup than manual export

**Best for**: Teams who want automation without upgrading to Enterprise

---

### Option 3: Enterprise Plan Upgrade

**Upgrade to Figma Enterprise for REST API access**

Contact Figma sales to upgrade from Organization to Enterprise plan.

**Pros**:

- ✅ Full REST API access with `file_variables:read` scope
- ✅ Complete automation possible
- ✅ CI/CD integration
- ✅ Webhooks for real-time sync

**Cons**:

- ❌ Significant cost increase (Enterprise pricing)
- ❌ Requires approval/budget
- ❌ May have minimum seat requirements

**Best for**: Large teams with budget who need full automation

---

### Option 4: Use Styles API Instead

**Continue using Figma Styles (`/files/{file_key}/styles`)**

Use the existing Styles API which works with current Organization plan token.

**Pros**:

- ✅ Works with current token scopes
- ✅ Fully automated via REST API
- ✅ No additional costs

**Cons**:

- ❌ No multi-mode/multi-brand support
- ❌ Styles are less powerful than Variables
- ❌ Cannot represent complex token relationships

**Best for**: Teams who don't need multi-brand theming

---

## API Endpoints by Category

### Working Endpoints (With Current Token)

```
Files:
✅ GET /v1/files/{file_key}
✅ GET /v1/files/{file_key}/nodes
✅ GET /v1/files/{file_key}/images
✅ GET /v1/files/{file_key}/versions
✅ GET /v1/files/{file_key}/comments

Design System:
✅ GET /v1/files/{file_key}/components
✅ GET /v1/files/{file_key}/styles
✅ GET /v1/files/{file_key}/component_sets

Development:
✅ GET /v1/files/{file_key}/dev_resources

Projects:
✅ GET /v1/teams/{team_id}/projects
✅ GET /v1/projects/{project_id}/files

Webhooks:
✅ GET /v2/webhooks
```

### Blocked Endpoints (Missing Scope)

```
Variables:
❌ GET /v1/files/{file_key}/variables/local
❌ GET /v1/files/{file_key}/variables/published

Error: "This endpoint requires the file_variables:read scope"
```

---

## Recommendations

1. **Short-term**: Continue using manual export workflow

   - Stable and works immediately
   - Document export process for team members

2. **Medium-term**: Investigate Figma plugin approach

   - Could automate export within Figma
   - Schedule regular exports

3. **Long-term**: Contact Figma about Variables API access
   - Request `file_variables:read` scope for Organization plan
   - Explore if Enterprise plan is needed

---

## Resources

- [Figma REST API Documentation](https://www.figma.com/developers/api)
- [Variables API (Docs)](https://www.figma.com/developers/api#variables)
- [Personal Access Tokens](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens)
- [API Scopes Reference](https://www.figma.com/developers/api#authentication-scopes)

---

**Last Updated**: 2026-01-04
**File**: XKxVlFf9TfWBHosOInkJXA
**Plan**: Organization

---

## Sources

- [Why's the "Variables API" only available on enterprise plans? | Figma Forum](https://forum.figma.com/ask-the-community-7/why-s-the-variables-api-only-available-on-enterprise-plans-36426)
- [Figma Variables API Endpoints | Developer Docs](https://developers.figma.com/docs/rest-api/variables-endpoints/)
- [How to detect Enterprise status before OAuth or handle file_variables:read scope errors? | Figma Forum](https://forum.figma.com/ask-the-community-7/how-to-detect-enterprise-status-before-oauth-or-handle-file-variables-read-scope-errors-46912)
- [Working with Variables | Plugin API](https://www.figma.com/plugin-docs/working-with-variables/)
- [Scopes for Enterprise User Access Token in REST API | Figma Forum](https://forum.figma.com/ask-the-community-7/scopes-for-enterprise-user-access-token-in-rest-api-13831)
- [Figma API Scopes Reference | Developer Docs](https://developers.figma.com/docs/rest-api/scopes/)
- [Invalid scope(s): files:read | Figma Forum](https://forum.figma.com/ask-the-community-7/invalid-scope-s-files-read-25670)
