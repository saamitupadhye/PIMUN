import React from 'react';
import { channels, events, tags } from '../data/mockData';

interface FilterSidebarProps {
  selectedChannel: string | null;
  selectedEvent: string | null;
  selectedTags: string[];
  onChannelChange: (channel: string | null) => void;
  onEventChange: (event: string | null) => void;
  onTagChange: (tag: string) => void;
}

export default function FilterSidebar({
  selectedChannel,
  selectedEvent,
  selectedTags,
  onChannelChange,
  onEventChange,
  onTagChange
}: FilterSidebarProps) {
  const handleChannelChange = (channel: string) => {
    if (typeof onChannelChange === 'function') {
      onChannelChange(selectedChannel === channel ? null : channel);
    }
  };

  const handleEventChange = (event: string) => {
    if (typeof onEventChange === 'function') {
      onEventChange(selectedEvent === event ? null : event);
    }
  };

  const handleTagChange = (tag: string) => {
    if (typeof onTagChange === 'function') {
      onTagChange(tag);
    }
  };

  return (
    <aside className="w-64 bg-white p-4 rounded-lg shadow">
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Channels</h3>
        <div className="space-y-2">
          {channels.map(channel => (
            <label key={channel} className="flex items-center">
              <input
                type="radio"
                name="channel"
                checked={selectedChannel === channel}
                onChange={() => handleChannelChange(channel)}
                className="mr-2"
              />
              {channel}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Events</h3>
        <div className="space-y-2">
          {events.map(event => (
            <label key={event} className="flex items-center">
              <input
                type="radio"
                name="event"
                checked={selectedEvent === event}
                onChange={() => handleEventChange(event)}
                className="mr-2"
              />
              {event}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Tags</h3>
        <div className="space-y-2">
          {tags.map(tag => (
            <label key={tag} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedTags.includes(tag)}
                onChange={() => handleTagChange(tag)}
                className="mr-2"
              />
              {tag}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}