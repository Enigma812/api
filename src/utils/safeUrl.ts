import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export function blobToSafeUrl(sanitizer: DomSanitizer): (blob: Blob) => SafeUrl {
  return (blob: Blob) => {
    const objectURL = URL.createObjectURL(blob);
    return sanitizer.bypassSecurityTrustUrl(objectURL);
  };
}
