import defaultAvatar from '@/assets/img/empty-avatar.jpg';

const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL || '';

/**
 * Resolves an image path to a full URL or fallback.
 * @param {string} path - The image path from the backend.
 * @param {string} fallback - The fallback image (default: avatar-01.jpg).
 * @returns {string} - The resolved image URL.
 */
export const resolveImageUrl = (path, fallback = defaultAvatar) => {
    if (!path) return fallback;
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${imageBaseUrl.replace(/\/$/, '')}${cleanPath}`;
};

export { defaultAvatar };
