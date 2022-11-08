export type addressType = {
   street: string,
   suite: string,
   city: string,
   zipcode: string,
}

export type constanType = {
   id: string,
   name: string,
   email: string,
   address: addressType,
}

export type postType = {
   title: string,
   body: string,
}

export type socialsType = {
   map: any,
   id: string,
   icon: string,
   path: string,
}

export type headingType = {
   tag: any,
   text: string,
}