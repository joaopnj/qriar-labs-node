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
import mainInstance from "@/lib/instance";
import { useState } from "react";

export function SubmitOrder() {

    const [title, setTitle] = useState('');

    const [open, setOpen] = useState(false);

    const createOrder = async () => {
        const result = await mainInstance.post('/order', { title });
        setOpen(false);
    };

    return (
        <Dialog open={open}>
            <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setOpen(true)}>Criar ordem</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Order your food</DialogTitle>
                    <DialogDescription>
                        Choose here what you want to eat
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text">
                            Food Title
                        </Label>
                        <br />
                        <Input id="title" value={title} className="col-span-3" onChange={(e) => {
                            setTitle(e.target.value);
                        }} />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={() => {
                        createOrder()
                    }}>Submit Order</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SubmitOrder;