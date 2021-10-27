import { user, users, usersOutline } from "./icons/user";
import { cog, cogOutline } from "./icons/cog";
import { exclamationCircle } from './icons/exclamation-circle';
import { briefcase, briefcaseOutline } from "./icons/briefcase";
import { lockClosed, lockClosedOutline } from "./icons/lock";
import { logout, logoutOutline } from "./icons/logout";
import { archive, archiveOutline } from "./icons/archive";
import { viewGrid, viewGridOutline } from "./icons/view-grid";
import { library, libraryOutline } from "./icons/library";
import { dotsVertical } from "./icons/dots-vertical";

export const pathSwitcher = (name: string): string[] => {
    switch (name) {
        case 'user':
            return user
        case 'cog':
            return cog
        case 'cog-outline':
            return cogOutline
        case 'briefcase':
            return briefcase
        case 'briefcase-outline':
        case 'library':
            return library
        case 'library-outline':
            return libraryOutline
        case 'archive':
            return archive
        case 'archive-outline':
            return archiveOutline
        case 'lock-closed-outline':
            return lockClosedOutline
        case 'lock-closed':
            return lockClosed
        case 'users-outline':
            return usersOutline
        case 'users':
            return users
        case 'logout':
            return logout
        case 'logout-outline':
            return logoutOutline
        case 'view-grid':
            return viewGrid
        case 'view-grid-outline':
            return viewGridOutline
        case 'dots-vertical':
            return dotsVertical
        default:
            return exclamationCircle
    }

}

