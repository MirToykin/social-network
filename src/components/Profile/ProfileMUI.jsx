import React from 'react';
import Grid from "@material-ui/core/Grid";
import ProfilePhoto from "./profilePhoto/ProfilePhoto";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

export default function Profile({userProfile, savePhoto, status, updateStatus, authId, saveProfileDescription}) {
  const isOwner = authId === userProfile.userId;

  return (
    <Grid container spacing={2} justify='center'>
      <Grid item xs={3}>
        <ProfilePhoto userProfile={userProfile} savePhoto={savePhoto} isOwner={isOwner}/>
      </Grid>
      <Grid item xs={6}>
        <ProfileDescription
          userProfile={userProfile}
          updateStatus={updateStatus}
          status={status}
          isOwner={isOwner}
          saveProfileDescription={saveProfileDescription}
        />
      </Grid>
    </Grid>
  );
}
