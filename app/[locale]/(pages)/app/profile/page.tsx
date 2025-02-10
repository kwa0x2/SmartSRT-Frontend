"use client";

import Layout from "@/components/app/layout";
import ProfileHeader from "@/components/app/profile/profile-header";
import ProfileInfo from "@/components/app/profile/profile-info";
import SubscriptionInfo from "@/components/app/profile/subscription-info";
import AccountManagement from "@/components/app/profile/account-management";
import HistoryFileList from "@/components/app/history";

export default function Profile() {
  return (
    <Layout>
      <div className="w-full flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 space-y-8">
          <ProfileHeader />
          <ProfileInfo />
          <SubscriptionInfo />
          <AccountManagement />
        </div>
        <div className="w-full lg:w-1/2">
          <HistoryFileList />
        </div>
      </div>
    </Layout>
  );
}
