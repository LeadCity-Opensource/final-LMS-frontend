import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// SVG paths (assuming these are imported correctly from your svg-4espj7hkez file)
import svgPaths from '../imports/svg-4espj7hkez';

// Reusable components for icons and nav items (kept from your original, but simplified)
function ProfileIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Group">
          <path d={svgPaths.p18918d70} id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p18020f80} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function LibraryIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Library">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Library">
          <path clipRule="evenodd" d={svgPaths.p451f000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p30402600} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function DropdownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`relative shrink-0 size-[24px] transition-transform ${isOpen ? 'rotate-180' : ''}`} data-name="gridicons:dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="gridicons:dropdown">
          <path d="M7 10L12 15L17 10H7Z" fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MyBooksIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="My Books">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0002 20">
        <g id="Mask group">
          <mask height="20" id="mask0_1_336" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="22" x="0" y="0">
            <g id="Group">
              <path d={svgPaths.p7a53b00} fill="var(--fill-0, #555555)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </mask>
          <g mask="url(#mask0_1_336)">
            <path d={svgPaths.p48e2900} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DownloadsIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Downloads">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Downloads">
          <path d={svgPaths.p169a6e80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HistoryIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="History">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="History">
          <path d={svgPaths.p111e9c0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SettingsIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Settings">
          <path d={svgPaths.p2af0b400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HelpIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Help">
          <path d={svgPaths.p331abd00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

// Main Sidebar component - now with dropdown for Library
export default function Sidebar() {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const navigate = useNavigate();

  const toggleLibrary = () => setIsLibraryOpen(!isLibraryOpen);

  return (
    <div className="flex flex-col h-full p-6 text-white">
      {/* Sidebar Header (optional - you could add a title here if needed) */}
      <div className="mb-8">
        <h3 className="text-xl font-bold">Navigation</h3>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col space-y-6">
        <div className="flex items-center gap-4 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition">
          <ProfileIcon />
          <span className="text-lg font-semibold">Profile</span>
        </div>

        {/* Library with Dropdown */}
        <div>
          <div
            className="flex items-center gap-4 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition"
            onClick={toggleLibrary}
          >
            <LibraryIcon />
            <span className="text-lg font-semibold">Library</span>
            <DropdownIcon isOpen={isLibraryOpen} />
          </div>
          {isLibraryOpen && (
            <div className="ml-8 mt-2 space-y-2">
              <div 
              className="cursor-pointer hover:bg-white/10 p-2 rounded-lg transition text-base"
              onClick={() => navigate('/books')}>
                Books
              </div>
              <div className="cursor-pointer hover:bg-white/10 p-2 rounded-lg transition text-base">
                Journals
              </div>
              <div className="cursor-pointer hover:bg-white/10 p-2 rounded-lg transition text-base">
                Past Questions
              </div>
              <div className="cursor-pointer hover:bg-white/10 p-2 rounded-lg transition text-base">
                Thesis
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition">
          <MyBooksIcon />
          <span className="text-lg font-semibold">My Books</span>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition">
          <DownloadsIcon />
          <span className="text-lg font-semibold">Download(s)</span>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition">
          <HistoryIcon />
          <span className="text-lg font-semibold">History</span>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition">
          <SettingsIcon />
          <span className="text-lg font-semibold">Settings</span>
        </div>

        <div className="flex items-center gap-4 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition">
          <HelpIcon />
          <span className="text-lg font-semibold">Help</span>
        </div>
      </nav>
    </div>
  );
}