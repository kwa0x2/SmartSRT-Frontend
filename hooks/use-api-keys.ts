import { useState } from "react";
import { ApiKey } from "@/components/app/api/types";

export const useApiKeys = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showKeyDialog, setShowKeyDialog] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [generatedKey, setGeneratedKey] = useState("");

  const createKey = (name: string) => {
    const newKey = {
      id: crypto.randomUUID(),
      name,
      key: `sk_${crypto.randomUUID().replace(/-/g, "")}`,
    };

    setApiKeys([...apiKeys, newKey]);
    setGeneratedKey(newKey.key);
    setShowCreateDialog(false);
    setShowKeyDialog(true);
    setNewKeyName("");
  };

  const deleteKey = (id: string) => {
    setApiKeys(apiKeys.filter((key) => key.id !== id));
  };

  return {
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
  };
}; 