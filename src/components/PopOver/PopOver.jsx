import React, { useState, useEffect, useRef } from 'react';
import './Popover.css'; // Include the relevant styles

const Popover = ({
  content,
  position = 'top', // 'top', 'bottom', 'left', 'right'
  trigger = 'click', // 'click', 'hover'
  children,
  closeOnClickOutside = true,
  offset = 10, // Distance from the trigger element
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({});
  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  // Close the popover if clicked outside
  const handleClickOutside = (e) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(e.target) &&
      !triggerRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  // Toggles popover visibility on click (or hover)
  const handleTrigger = () => {
    setIsOpen((prev) => !prev);
  };

  // Set popover position dynamically based on trigger position and desired position
  const calculatePosition = () => {
    if (triggerRef.current && popoverRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();
      let positionStyles = {};

      switch (position) {
        case 'top':
          positionStyles = {
            bottom: `calc(100% + ${offset}px)`,
            left: `${triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2}px`,
          };
          break;
        case 'bottom':
          positionStyles = {
            top: `calc(100% + ${offset}px)`,
            left: `${triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2}px`,
          };
          break;
        case 'left':
          positionStyles = {
            right: `calc(100% + ${offset}px)`,
            top: `${triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2}px`,
          };
          break;
        case 'right':
          positionStyles = {
            left: `calc(100% + ${offset}px)`,
            top: `${triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2}px`,
          };
          break;
        default:
          break;
      }

      setPopoverPosition(positionStyles);
    }
  };

  useEffect(() => {
    if (isOpen) {
      calculatePosition();
    }
  }, [isOpen, position]);

  useEffect(() => {
    if (closeOnClickOutside) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [closeOnClickOutside]);

  return (
    <div
      ref={triggerRef}
      onClick={trigger === 'click' ? handleTrigger : null}
      onMouseEnter={trigger === 'hover' ? () => setIsOpen(true) : null}
      onMouseLeave={trigger === 'hover' ? () => setIsOpen(false) : null}
      className="popover-trigger"
    >
      {children}
      {isOpen && (
        <div
          ref={popoverRef}
          className="popover"
          style={{
            position: 'absolute',
            zIndex: 10,
            ...popoverPosition,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
