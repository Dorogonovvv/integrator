'use client';
import { useState } from 'react';
import { sha256 } from 'js-sha256';

// Base URL for the Gravatar API
const BASE_API_URL = 'https://api.gravatar.com/v3';

function getProfileIdentifier(email: string) {
  // Trim leading and trailing whitespace and convert to lowercase
  const address = String(email).trim().toLowerCase();
  // Create a SHA256 hash of the email address
  return sha256(address);
}

const Page = () => {
  const [email, setEmail] = useState('');
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProfileData = async (email: string) => {
    const profileIdentifier = getProfileIdentifier(email);
    const url = `${BASE_API_URL}/profiles/${profileIdentifier}`;

    setLoading(true);
    setError('');
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('No profile found for this identifier');
      }
      const data = await res.json();
      setProfileData(data);
    } catch (err) {
      setError('No profile found or an error occurred.');
      setProfileData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchProfileData(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">Gravatar Profile Lookup</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
              placeholder="Enter email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            {loading ? 'Fetching...' : 'Get Profile Info'}
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {profileData && (
          <div className="mt-6">
            {/* Profile Section */}
            <div className="text-center">
              <img
                src={profileData.avatar_url}
                alt={profileData.avatar_alt_text}
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h2 className="text-2xl font-semibold mt-4">{profileData.display_name}</h2>
              <p className="text-gray-600">{profileData.location}</p>
              <p className="text-gray-600">{profileData.job_title} at {profileData.company}</p>
              <p className="text-gray-600">{profileData.pronouns}</p>
            </div>

            {/* Verified Accounts */}
            {profileData.verified_accounts && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Verified Accounts</h3>
                <div className="flex flex-wrap gap-4">
                  {profileData.verified_accounts.map((account: any) => (
                    <div key={account.service_type} className="p-4 border border-gray-200 rounded-lg w-48">
                      <img src={account.service_icon} alt={account.service_label} className="w-8 h-8 inline-block mr-2" />
                      <a href={account.url} target="_blank" rel="noopener noreferrer" className="text-indigo-500">
                        {account.service_label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Description */}
            {profileData.description && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-700 mb-4">About</h3>
                <p className="text-gray-600">{profileData.description}</p>
              </div>
            )}

            {/* Contact Information */}
            {profileData.contact_info && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Contact Information</h3>
                <ul className="text-gray-600">
                  <li>Email: <a href={`mailto:${profileData.contact_info.email}`} className="text-indigo-500">{profileData.contact_info.email}</a></li>
                  <li>Phone: {profileData.contact_info.cell_phone}</li>
                  <li>Website: <a href={profileData.links[0]?.url} target="_blank" rel="noopener noreferrer" className="text-indigo-500">{profileData.links[0]?.label}</a></li>
                </ul>
              </div>
            )}

            {/* Interests */}
            {profileData.interests && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Interests</h3>
                <ul className="text-gray-600">
                  {profileData.interests.map((interest: any) => (
                    <li key={interest.id}>{interest.name}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gallery */}
            {profileData.gallery && profileData.gallery.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Gallery</h3>
                <div className="grid grid-cols-2 gap-4">
                  {profileData.gallery.map((image: any) => (
                    <div key={image.url}>
                      <img src={image.url} alt={image.alt_text} className="rounded-lg w-full h-auto" />
                      <p className="text-gray-600 mt-2">{image.alt_text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;