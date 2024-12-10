import React from 'react';
import {
  FaCheck, FaTrash, FaSpinner, FaPlus, FaTimes, FaEdit, FaUser, FaSearch, FaEnvelope, FaHeart,
  FaStar, FaCog, FaHome, FaPhone, FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowLeft,
  FaArrowRight, FaArrowUp, FaArrowDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaAngleDown, FaShoppingCart, FaSignInAlt, FaSignOutAlt,
  FaBook, FaCloudUploadAlt, FaCloudDownloadAlt, FaHandshake, FaBell, FaCalendar, FaMapMarkerAlt, FaLock, FaUnlock, FaBatteryFull,
  FaBatteryHalf, FaBatteryEmpty, FaDownload, FaUpload, FaThumbsUp, FaThumbsDown, FaWifi, FaWifiSlash, FaPrint, FaInfoCircle, FaExclamationTriangle, FaExclamationCircle
} from 'react-icons/fa';

const Icon = ({ name, size = 20 }) => {
  const iconMap = {
    'check': <FaCheck size={size} />,
    'trash': <FaTrash size={size} />,
    'spinner': <FaSpinner size={size} />,
    'info': <FaInfoCircle size={size} />,
    'warning': <FaExclamationTriangle size={size} />,
    'error': <FaExclamationCircle size={size} />,
    'plus': <FaPlus size={size} />,
    'times': <FaTimes size={size} />,
    'edit': <FaEdit size={size} />,
    'user': <FaUser size={size} />,
    'search': <FaSearch size={size} />,
    'envelope': <FaEnvelope size={size} />,
    'heart': <FaHeart size={size} />,
    'star': <FaStar size={size} />,
    'cog': <FaCog size={size} />,
    'home': <FaHome size={size} />,
    'phone': <FaPhone size={size} />,
    'github': <FaGithub size={size} />,
    'facebook': <FaFacebook size={size} />,
    'twitter': <FaTwitter size={size} />,
    'linkedin': <FaLinkedin size={size} />,
    'instagram': <FaInstagram size={size} />,
    'arrow-left': <FaArrowLeft size={size} />,
    'arrow-right': <FaArrowRight size={size} />,
    'arrow-up': <FaArrowUp size={size} />,
    'arrow-down': <FaArrowDown size={size} />,
    'angle-left': <FaAngleLeft size={size} />,
    'angle-right': <FaAngleRight size={size} />,
    'angle-up': <FaAngleUp size={size} />,
    'angle-down': <FaAngleDown size={size} />,
    'shopping-cart': <FaShoppingCart size={size} />,
    'sign-in': <FaSignInAlt size={size} />,
    'sign-out': <FaSignOutAlt size={size} />,
    'book': <FaBook size={size} />,
    'cloud-upload': <FaCloudUploadAlt size={size} />,
    'cloud-download': <FaCloudDownloadAlt size={size} />,
    'handshake': <FaHandshake size={size} />,
    'bell': <FaBell size={size} />,
    'calendar': <FaCalendar size={size} />,
    'map-marker': <FaMapMarkerAlt size={size} />,
    'lock': <FaLock size={size} />,
    'unlock': <FaUnlock size={size} />,
    'battery-full': <FaBatteryFull size={size} />,
    'battery-half': <FaBatteryHalf size={size} />,
    'battery-empty': <FaBatteryEmpty size={size} />,
    'download': <FaDownload size={size} />,
    'upload': <FaUpload size={size} />,
    'thumbs-up': <FaThumbsUp size={size} />,
    'thumbs-down': <FaThumbsDown size={size} />,
    'wifi': <FaWifi size={size} />,
    'wifi-slash': <FaWifiSlash size={size} />,
    'print': <FaPrint size={size} />
  };

  return iconMap[name] || null;  // Return null if the icon name is not found
};

export default Icon;
