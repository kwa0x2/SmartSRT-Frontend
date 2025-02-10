"use client";

import Layout from "@/components/app/layout";
import ProfileHeader from "@/components/app/profile/profile-header";
import ProfileInfo from "@/components/app/profile/profile-info";
import SubscriptionInfo from "@/components/app/profile/subscription-info";
import AccountManagement from "@/components/app/profile/account-management";

export default function Profile() {
  return (
    <Layout>
      <div className="w-full space-y-8">
        <ProfileHeader />
        <ProfileInfo />
        <SubscriptionInfo />
        <AccountManagement />
      </div>
    </Layout>
  );
}
