import { UserManagementService } from './user-management';
import { AuthGuardService } from './auth-guard';
import { NotAuthGuard } from './not-auth-guard';
import { FacebookLoginService } from './facebook-api-service';

export const SHARED_SERVICES = [
    UserManagementService,
    AuthGuardService,
    NotAuthGuard,
    FacebookLoginService
]

export { UserManagementService, AuthGuardService, NotAuthGuard, FacebookLoginService }