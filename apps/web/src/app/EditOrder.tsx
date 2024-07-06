import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import mainInstance from "@/lib/instance";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

const statusEnum = [
    'WAITING_PAYMENT',
    'PAYMENT_APROVED',
    'DELIVERING',
    'DELIVERED'
];

export function EditOrder({ id }: { id: number }) {

    const [status, setStatus] = useState('');

    const [open, setOpen] = useState(false);

    const updateOrder = async () => {
        const result = await mainInstance.patch(`/order/update-status/${id}`, { status });
        setOpen(false);
    };

    return (
        <Dialog open={open}>
            <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setOpen(true)} size="sm" className="h-7 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    Update Order
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle> Update order</DialogTitle>
                    <DialogDescription>
                        Change the status of the order
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Label htmlFor="name" className="text">
                        Status
                    </Label>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Select onValueChange={(value) => setStatus(value)}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Choose your status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {statusEnum.map((currentStatus) => <SelectItem value={currentStatus}> {currentStatus}</SelectItem>)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={() => {
                        updateOrder()
                    }}>Update Order</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditOrder;