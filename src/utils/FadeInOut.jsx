import React, { useState, useEffect, useRef } from 'react';

export function FadeInOut({
  preventBodyScroll = false,
  show,
  children
}) {
  try {

    const [renderChildren, setRenderChildren] = useState();
    const [visibility, setVisibility] = useState('opacity-0');
    const timeoutRef = useRef(null);

    useEffect(() => {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (show) {
        setRenderChildren(true);
        if (preventBodyScroll) {
          document.body.classList.add('overflow-hidden');
        }

        timeoutRef.current = setTimeout(() => {
          setVisibility("opacity-100");
        }, 50);
      } else if (!show && renderChildren) {
        setVisibility("opacity-0");

        if (preventBodyScroll) {
          document.body.classList.remove('overflow-hidden');
        }

        timeoutRef.current = setTimeout(() => {
          setRenderChildren(false);
        }, 500);
      }
    }, [show]);

    // Cleanup on component unmount
    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        if (preventBodyScroll) {
          document.body.classList.remove('overflow-hidden');
        }
      };
    }, []);

    return (
      <>
        {renderChildren && (
          <div className={`transition duration-500 motion-reduce:transition-none ${visibility}`}>
            {children}
          </div>
        )}
      </>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
}