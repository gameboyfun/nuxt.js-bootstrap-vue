import nav from "../_nav";

export default async function ({ route, error, store, redirect }) {
  const userRight = store?.state?.auth?.user?.roleGroup?.roles.map(data => data.id) || null;
  // if(userRight.find(data => data.id === -1)) {
  //   let navs = nav;
  // }
  if (userRight) {
    // let navs = [];
    // nav.items.map(item => {
    //   if (item.role) {
    //     if (
    //       userRight.indexOf(item.role) >= 0 &&
    //       // item.url.startsWith(route.path)
    //       route.path.startsWith(item.url)
    //     ) {
    //       navs.push(item);
    //     }
    //   } else if (item.children) {
    //     item.children.map(child => {
    //       if (
    //         userRight.indexOf(child.role) >= 0 &&
    //         // child.url.startsWith(route.path)
    //         route.path.startsWith(child.url)
    //       ) {
    //         navs.push(item);
    //       }
    //     });
    //   }
    // });
    // if (!navs.length > 0) {
    //   error({
    //     message: "You are not allowed for this page.",
    //     statusCode: 403
    //   });
    // }
    let navRole = nav.items.filter(data => route.path.startsWith(data.url));
    let found
    if (userRight.includes(-1)) {
      found = true;
    } else {
      if (route.path === '/') {
        found = userRight.includes(navRole[0]?.role)
      } else {
        found = userRight.includes(navRole[1]?.role)
      }
    }
    if (!found) {
      error({
        message: "You are not allowed for this page.",
        statusCode: 403
      });
    }
  }
}
