import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ApiKeyDialogsProps {
  showCreateDialog: boolean;
  showKeyDialog: boolean;
  newKeyName: string;
  generatedKey: string;
  setShowCreateDialog: (show: boolean) => void;
  setShowKeyDialog: (show: boolean) => void;
  setNewKeyName: (name: string) => void;
  handleCreateKey: () => void;
}

const ApiKeyDialogs = ({
  showCreateDialog,
  showKeyDialog,
  newKeyName,
  generatedKey,
  setShowCreateDialog,
  setShowKeyDialog,
  setNewKeyName,
  handleCreateKey,
}: ApiKeyDialogsProps) => {
  return (
    <>
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogTrigger asChild>
          <Button size="sm" className="bg-black uppercase hover:bg-black/90 h-9 text-sm md:text-base disabled:opacity-70">
            Create API Key
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New API Key</DialogTitle>
            <DialogDescription className="text-black">
              Enter a name for your API key
            </DialogDescription>
          </DialogHeader>
          <Input
            placeholder="API Key Name"
            className="text-black text-sm"
            value={newKeyName}
            onChange={(e) => setNewKeyName(e.target.value)}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreateDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateKey} disabled={!newKeyName}>
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showKeyDialog} onOpenChange={setShowKeyDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>API Key Created</DialogTitle>
            <DialogDescription className="text-black">
              Make sure to copy your API key now. You won't be able to see it again!
            </DialogDescription>
          </DialogHeader>
          <Input className="text-black text-sm" value={generatedKey} readOnly />
          <DialogFooter>
            <Button onClick={() => setShowKeyDialog(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ApiKeyDialogs; 