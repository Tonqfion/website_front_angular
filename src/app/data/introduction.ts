export class Introduction {
  aboutMe: string;
  profilePictureUrl: string;
  userTitle: string;

  constructor(introResponse: any) {
    this.aboutMe = introResponse.data.attributes.aboutMe;
    this.userTitle = introResponse.data.attributes.aboutMe;
    this.profilePictureUrl = introResponse.data.attributes.profilePicture.data.attributes.url;
  }

}
