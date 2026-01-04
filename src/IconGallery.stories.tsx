import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useMemo, useCallback } from 'react';
import metadata from './assets/icons/metadata.json';

interface IconData {
  name: string;
  originalName: string;
  nodeId: string;
  componentSetName: string | null;
}

type ViewMode = 'grid' | 'table';
type SortBy = 'name' | 'originalName' | 'nodeId';

const IconGallery = () => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('originalName');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  // Memoize the icons array to prevent recreation on every render
  const icons: [string, IconData][] = useMemo(
    () => Object.entries(metadata),
    []
  );

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    icons.forEach(([, data]) => {
      if (data.componentSetName) {
        cats.add(data.componentSetName);
      }
    });
    return ['all', ...Array.from(cats).sort()];
  }, [icons]);

  const filteredIcons = useMemo(() => {
    let filtered = icons;

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(
        ([, data]) => data.componentSetName === categoryFilter
      );
    }

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        ([filename, data]) =>
          data.originalName.toLowerCase().includes(searchLower) ||
          filename.toLowerCase().includes(searchLower) ||
          data.nodeId.includes(search)
      );
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      const aVal = a[1][sortBy] || '';
      const bVal = b[1][sortBy] || '';
      return aVal.localeCompare(bVal);
    });

    return sorted;
  }, [search, sortBy, categoryFilter, icons]);

  // Copy icon name to clipboard
  const copyToClipboard = useCallback((filename: string) => {
    window.navigator.clipboard.writeText(filename);
    setCopiedIcon(filename);
    window.setTimeout(() => setCopiedIcon(null), 2000);
  }, []);

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'system-ui',
        maxWidth: '1600px',
        margin: '0 auto',
      }}
    >
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ marginBottom: '8px' }}>Icon Gallery</h1>
        <p style={{ color: '#666', fontSize: '14px' }}>
          {icons.length} icons exported from Figma • Click any icon to copy
          filename
        </p>
      </div>

      {/* Filters and Controls */}
      <div
        style={{
          marginBottom: '24px',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: '16px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
        }}
      >
        <input
          type="text"
          placeholder="Search icons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '10px 14px',
            fontSize: '14px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            width: '280px',
            outline: 'none',
          }}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{
            padding: '10px 14px',
            fontSize: '14px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            outline: 'none',
            minWidth: '180px',
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'All Categories' : cat}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortBy)}
          style={{
            padding: '10px 14px',
            fontSize: '14px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            outline: 'none',
          }}
        >
          <option value="originalName">Sort by Original Name</option>
          <option value="name">Sort by Filename</option>
          <option value="nodeId">Sort by Node ID</option>
        </select>

        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginLeft: 'auto',
            border: '1px solid #ddd',
            borderRadius: '6px',
            padding: '2px',
            backgroundColor: '#fff',
          }}
        >
          <button
            onClick={() => setViewMode('grid')}
            style={{
              padding: '8px 16px',
              fontSize: '14px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: viewMode === 'grid' ? '#007bff' : 'transparent',
              color: viewMode === 'grid' ? '#fff' : '#666',
              fontWeight: viewMode === 'grid' ? 600 : 400,
            }}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode('table')}
            style={{
              padding: '8px 16px',
              fontSize: '14px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: viewMode === 'table' ? '#007bff' : 'transparent',
              color: viewMode === 'table' ? '#fff' : '#666',
              fontWeight: viewMode === 'table' ? 600 : 400,
            }}
          >
            Table
          </button>
        </div>

        <span
          style={{
            color: '#666',
            fontSize: '14px',
            padding: '0 8px',
          }}
        >
          Showing {filteredIcons.length} of {icons.length}
        </span>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '16px',
          }}
        >
          {filteredIcons.map(([filename, data]) => {
            const svgUrl = new window.URL(
              `./assets/icons/${filename}.svg`,
              import.meta.url
            ).href;
            const isCopied = copiedIcon === filename;

            return (
              <div
                key={filename}
                onClick={() => copyToClipboard(filename, data.originalName)}
                style={{
                  padding: '16px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backgroundColor: isCopied ? '#e7f5ff' : '#fff',
                  borderColor: isCopied ? '#007bff' : '#e0e0e0',
                }}
                onMouseEnter={(e) => {
                  if (!isCopied) {
                    e.currentTarget.style.borderColor = '#007bff';
                    e.currentTarget.style.boxShadow =
                      '0 2px 8px rgba(0,123,255,0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isCopied) {
                    e.currentTarget.style.borderColor = '#e0e0e0';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '6px',
                  }}
                >
                  <img
                    src={svgUrl}
                    alt={data.originalName}
                    style={{
                      maxWidth: '70%',
                      maxHeight: '70%',
                      objectFit: 'contain',
                    }}
                    loading="lazy"
                    onError={(e) => {
                      (
                        e.target as typeof window.HTMLImageElement.prototype
                      ).style.display = 'none';
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#333',
                    marginBottom: '4px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {data.originalName}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    color: '#999',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {isCopied ? '✓ Copied!' : filename}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Table View */}
      {viewMode === 'table' && (
        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '14px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: '#f8f9fa',
                  borderBottom: '2px solid #e0e0e0',
                  textAlign: 'left',
                }}
              >
                <th style={{ padding: '14px', fontWeight: 600 }}>Preview</th>
                <th style={{ padding: '14px', fontWeight: 600 }}>
                  Original Name
                </th>
                <th style={{ padding: '14px', fontWeight: 600 }}>Filename</th>
                <th style={{ padding: '14px', fontWeight: 600 }}>
                  Component Set
                </th>
                <th style={{ padding: '14px', fontWeight: 600 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredIcons.map(([filename, data]) => {
                const svgUrl = new window.URL(
                  `./assets/icons/${filename}.svg`,
                  import.meta.url
                ).href;
                const isCopied = copiedIcon === filename;

                return (
                  <tr
                    key={filename}
                    style={{
                      borderBottom: '1px solid #f0f0f0',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8f9fa';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <td style={{ padding: '12px', width: '80px' }}>
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#f8f9fa',
                          borderRadius: '6px',
                        }}
                      >
                        <img
                          src={svgUrl}
                          alt={data.originalName}
                          style={{
                            maxWidth: '40px',
                            maxHeight: '40px',
                            objectFit: 'contain',
                          }}
                          loading="lazy"
                          onError={(e) => {
                            (
                              e.target as typeof window.HTMLImageElement.prototype
                            ).style.display = 'none';
                          }}
                        />
                      </div>
                    </td>
                    <td
                      style={{
                        padding: '12px',
                        fontWeight: 500,
                        color: '#333',
                      }}
                    >
                      {data.originalName}
                    </td>
                    <td
                      style={{
                        padding: '12px',
                        fontFamily: 'monospace',
                        fontSize: '13px',
                        color: '#666',
                      }}
                    >
                      {filename}
                    </td>
                    <td
                      style={{
                        padding: '12px',
                        color: '#666',
                        fontSize: '13px',
                      }}
                    >
                      {data.componentSetName || '-'}
                    </td>
                    <td style={{ padding: '12px' }}>
                      <button
                        onClick={() =>
                          copyToClipboard(filename, data.originalName)
                        }
                        style={{
                          padding: '6px 12px',
                          fontSize: '12px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          backgroundColor: isCopied ? '#007bff' : '#fff',
                          color: isCopied ? '#fff' : '#666',
                          transition: 'all 0.2s',
                          fontWeight: 500,
                        }}
                      >
                        {isCopied ? '✓ Copied' : 'Copy'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {filteredIcons.length === 0 && (
        <div
          style={{
            textAlign: 'center',
            padding: '80px 20px',
            color: '#999',
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
          <div style={{ fontSize: '18px', marginBottom: '8px' }}>
            No icons found
          </div>
          <div style={{ fontSize: '14px' }}>
            Try adjusting your search or filter criteria
          </div>
        </div>
      )}
    </div>
  );
};

const meta = {
  title: 'Icon Gallery',
  component: IconGallery,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Interactive icon gallery with 2800+ icons exported from Figma.

**Features:**
- 🔍 Search by name or filename
- 🏷️ Filter by component category
- 📋 Click to copy filename to clipboard
- 👁️ Toggle between Grid and Table view
- ⚡ Lazy loading for optimal performance
        `,
      },
    },
  },
} satisfies Meta<typeof IconGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {};
