import { Injectable } from '@angular/core';
import { DefaultUrlSerializer, UrlTree, UrlHandlingStrategy } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class TrailingSlashUrlHandlingStrategy implements UrlHandlingStrategy {
    shouldProcessUrl(url: UrlTree): boolean {
        return true;
    }

    extract(url: UrlTree): UrlTree {
        return this.removeTrailingSlash(url);
    }

    merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree {
        return newUrlPart;
    }

    private removeTrailingSlash(url: UrlTree): UrlTree {
        const urlSerializer = new DefaultUrlSerializer();
        const path = urlSerializer.serialize(url);

        if (path !== '/' && path.endsWith('/')) {
            // Remove trailing slash if present
            const newUrl = path.slice(0, -1);
            return urlSerializer.parse(newUrl);
        }

        return url;
    }
}
