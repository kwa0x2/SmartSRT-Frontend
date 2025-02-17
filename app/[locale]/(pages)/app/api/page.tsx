"use client";

import Layout from "@/components/app/layout";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import ApiHeader from "@/components/app/api/api-header";
import ApiSearch from "@/components/app/api/api-search";
import ApiKeyDialogs from "@/components/app/api/api-key-dialogs";
import ApiKeyList from "@/components/app/api/api-key-list";
import { ApiKey } from "@/components/app/api/types";
import SubscriptionInfo from "@/components/app/profile/subscription-info";

export default function ApiPage() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showKeyDialog, setShowKeyDialog] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [generatedKey, setGeneratedKey] = useState("");

  const handleCreateKey = () => {
    const newKey = {
      id: Math.random().toString(36).substr(2, 9),
      name: newKeyName,
      key: `sk_${Math.random().toString(36).substr(2, 32)}`,
    };

    setApiKeys([...apiKeys, newKey]);
    setGeneratedKey(newKey.key);
    setShowCreateDialog(false);
    setShowKeyDialog(true);
    setNewKeyName("");
  };

  const handleDeleteKey = (id: string) => {
    setApiKeys(apiKeys.filter((key) => key.id !== id));
  };

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
            handleCreateKey={handleCreateKey}
          />
        </div>

        <ApiKeyList apiKeys={apiKeys} handleDeleteKey={handleDeleteKey} />

        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            API keys allow you to authenticate with our API and access its
            functionalities programmatically. Each API request made using your
            API key will count towards your monthly subscription limit.
          </p>
          <p>
            For detailed information about API endpoints, request limits, and
            implementation examples, please refer to our{" "}
            <Link href="/docs/api" className="text-primary hover:underline">
              API documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
}
