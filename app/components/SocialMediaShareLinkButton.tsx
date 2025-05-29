'use client';

import { useEffect, useState } from 'react';

type ShareButtonProps = {
    link: string;
    text: string;
}

export default function SocialMediaShareLinkButton({link, text}: ShareButtonProps) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  const handleShare = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(
        text
      )}&hashtags=MCHSIjebu`;
    switch(link) {
        case 'Facebook':
            window.open(fbUrl, '_blank', 'width=600,height=400');
        case 'X':
            window.open(xUrl, '_blank', 'width=600,height=400');
    }
    
  };

  return (
    <button
      onClick={handleShare}
      className="px-4 py-2 text-sm bg-blue-700 text-white rounded hover:bg-blue-800"
    >
      {`Share on ${link}`} 
    </button>
  );
}
