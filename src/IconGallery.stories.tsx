import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useMemo } from 'react';
import metadata from './assets/icons/metadata.json';

interface IconData {
  name: string;
  originalName: string;
  nodeId: string;
  componentSetName: string | null;
}

const IconGallery = () => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'originalName' | 'nodeId'>('originalName');

  const icons: [string, IconData][] = Object.entries(metadata);

  const filteredIcons = useMemo(() => {
    let filtered = icons.filter(([filename, data]) => 
      data.originalName.toLowerCase().includes(search.toLowerCase()) ||
      filename.toLowerCase().includes(search.toLowerCase()) ||
      data.nodeId.includes(search)
    );

    filtered.sort((a, b) => {
      const aVal = a[1][sortBy] || '';
      const bVal = b[1][sortBy] || '';
      return aVal.localeCompare(bVal);
    });

    return filtered;
  }, [search, sortBy, icons]);

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h1>Icon Gallery ({icons.length} icons)</h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search icons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '8px 12px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '300px',
          }}
        />
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          style={{
            padding: '8px 12px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        >
          <option value="originalName">Sort by Original Name</option>
          <option value="name">Sort by Filename</option>
          <option value="nodeId">Sort by Node ID</option>
        </select>

        <span style={{ color: '#666' }}>
          Showing {filteredIcons.length} of {icons.length}
        </span>
      </div>

      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse',
        fontSize: '14px',
      }}>
        <thead>
          <tr style={{ 
            backgroundColor: '#f5f5f5', 
            borderBottom: '2px solid #ddd',
            textAlign: 'left',
          }}>
            <th style={{ padding: '12px' }}>Preview</th>
            <th style={{ padding: '12px' }}>Original Name</th>
            <th style={{ padding: '12px' }}>Filename</th>
            <th style={{ padding: '12px' }}>Node ID</th>
            <th style={{ padding: '12px' }}>Component Set</th>
          </tr>
        </thead>
        <tbody>
          {filteredIcons.map(([filename, data]) => {
            const svgUrl = new URL(`./assets/icons/${filename}.svg`, import.meta.url).href;

            return (
              <tr key={filename} style={{ 
                borderBottom: '1px solid #eee',
              }}>
                <td style={{ padding: '12px', width: '80px' }}>
                  <div style={{ 
                    width: '60px', 
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #eee',
                    borderRadius: '4px',
                  }}>
                    <img 
                      src={svgUrl} 
                      alt={data.originalName}
                      style={{ maxWidth: '50px', maxHeight: '50px' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                </td>
                <td style={{ padding: '12px', fontWeight: 500 }}>
                  {data.originalName}
                </td>
                <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px', color: '#666' }}>
                  {filename}
                </td>
                <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px', color: '#888' }}>
                  {data.nodeId}
                </td>
                <td style={{ padding: '12px', color: '#666' }}>
                  {data.componentSetName || '-'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const meta = {
  title: '4. Icon Gallery',
  component: IconGallery,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IconGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {};
