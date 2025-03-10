"use client";

import Layout from "@/components/app/layout";
import ApiHeader from "@/components/app/api/api-header";
import ApiSearch from "@/components/app/api/api-search";
import ApiKeyDialogs from "@/components/app/api/api-key-dialogs";
import ApiKeyList from "@/components/app/api/api-key-list";
import ApiDescription from "@/components/app/api/api-description";
import SubscriptionInfo from "@/components/app/profile/subscription-info";
import { useApiKeys } from "@/hooks/use-api-keys";

export default function ApiPage() {
  const {
    apiKeys,
    showCreateDialog,
    showKeyDialog,
    newKeyName,
    generatedKey,
    setShowCreateDialog,
    setShowKeyDialog,
    setNewKeyName,
    createKey,
    deleteKey,
  } = useApiKeys();

  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto space-y-8">
        <ApiHeader />
        <SubscriptionInfo />

        <div className="flex items-center justify-between gap-4">
          <ApiSearch />
          <ApiKeyDialogs
            showCreateDialog={showCreateDialog}
            showKeyDialog={showKeyDialog}
            newKeyName={newKeyName}
            generatedKey={generatedKey}
            setShowCreateDialog={setShowCreateDialog}
            setShowKeyDialog={setShowKeyDialog}
            setNewKeyName={setNewKeyName}
            handleCreateKey={() => createKey(newKeyName)}
          />
        </div>

        <ApiKeyList apiKeys={apiKeys} handleDeleteKey={deleteKey} />
        <ApiDescription />
      </div>
    </Layout>
  );
}
