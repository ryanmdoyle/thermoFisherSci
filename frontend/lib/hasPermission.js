export default function hasPermission(user, permissionNeeded) {
  if (user.permissions.includes('ADMIN')) return true;
  const permissionEnum = permissionNeeded.toString().toUpperCase();
  console.log(permissionEnum);
  const userHasPermission = user.permissions.includes(permissionEnum || 'ADMIN');
  if (!userHasPermission) {
    // throw new Error(`You do not have permissions for ${permissionEnum}, you have permissions for ${user.permissions}`)
    // console.error(`You do not have permissions for ${permissionEnum}, you have permissions for ${user.permissions}`)
  }
  return userHasPermission;
}