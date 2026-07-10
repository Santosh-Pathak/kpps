'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import toast from 'react-hot-toast'
import { Plus, Trash2, Pencil } from 'lucide-react'
import { TestimonialsAPI } from '@/services/apis/school.api'
import type { Testimonial } from '@/types/school'
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogFooter,
} from '@/components/ui/dialog'

type FormValues = {
   name: string
   role: string
   quote: string
   avatarUrl: string
   sortOrder: number
   isActive: boolean
}

const emptyForm: FormValues = {
   name: '',
   role: '',
   quote: '',
   avatarUrl: '',
   sortOrder: 0,
   isActive: true,
}

export function TestimonialsManager() {
   const [items, setItems] = useState<Testimonial[]>([])
   const [loading, setLoading] = useState(true)
   const [saving, setSaving] = useState(false)
   const [editing, setEditing] = useState<Testimonial | null>(null)
   const [open, setOpen] = useState(false)

   const { register, handleSubmit, reset, setValue, watch } =
      useForm<FormValues>({ defaultValues: emptyForm })
   const isActive = watch('isActive')

   useEffect(() => {
      TestimonialsAPI.getAll()
         .then(setItems)
         .catch(() => toast.error('Failed to load testimonials'))
         .finally(() => setLoading(false))
   }, [])

   const openCreate = () => {
      setEditing(null)
      reset(emptyForm)
      setOpen(true)
   }

   const openEdit = (item: Testimonial) => {
      setEditing(item)
      reset({
         name: item.name,
         role: item.role ?? '',
         quote: item.quote,
         avatarUrl: item.avatarUrl ?? '',
         sortOrder: item.sortOrder ?? 0,
         isActive: item.isActive ?? true,
      })
      setOpen(true)
   }

   const onSubmit = async (data: FormValues) => {
      setSaving(true)
      try {
         if (editing) {
            const updated = await TestimonialsAPI.update(editing.id, data)
            setItems((prev) =>
               prev.map((t) => (t.id === editing.id ? updated : t))
            )
            toast.success('Testimonial updated')
         } else {
            const created = await TestimonialsAPI.create(data)
            setItems((prev) => [created, ...prev])
            toast.success('Testimonial created')
         }
         setOpen(false)
      } catch {
         toast.error('Failed to save testimonial')
      } finally {
         setSaving(false)
      }
   }

   const onDelete = async (id: string) => {
      if (!confirm('Delete this testimonial?')) return
      try {
         await TestimonialsAPI.delete(id)
         setItems((prev) => prev.filter((t) => t.id !== id))
         toast.success('Testimonial deleted')
      } catch {
         toast.error('Failed to delete')
      }
   }

   if (loading)
      return (
         <p className="text-muted-foreground text-sm">Loading testimonials…</p>
      )

   return (
      <div>
         <div className="mb-4 flex items-center justify-between">
            <p className="text-muted-foreground text-sm">
               {items.length} testimonial(s)
            </p>
            <Button onClick={openCreate} size="sm">
               <Plus className="h-4 w-4" /> Add
            </Button>
         </div>

         <div className="space-y-3">
            {items.map((item) => (
               <div
                  key={item.id}
                  className="bg-background border-border flex items-start gap-4 rounded-xl border p-4"
               >
                  <div className="min-w-0 flex-1">
                     <p className="text-sm font-medium">{item.name}</p>
                     <p className="text-muted-foreground text-xs">
                        {item.role}
                     </p>
                     <p className="text-muted-foreground mt-1 line-clamp-2 text-xs italic">
                        &ldquo;{item.quote}&rdquo;
                     </p>
                  </div>
                  <button
                     onClick={() => openEdit(item)}
                     className="text-muted-foreground hover:text-foreground p-2"
                  >
                     <Pencil className="h-4 w-4" />
                  </button>
                  <button
                     onClick={() => onDelete(item.id)}
                     className="text-muted-foreground hover:text-destructive p-2"
                  >
                     <Trash2 className="h-4 w-4" />
                  </button>
               </div>
            ))}
         </div>

         <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
               <DialogHeader>
                  <DialogTitle>
                     {editing ? 'Edit Testimonial' : 'New Testimonial'}
                  </DialogTitle>
               </DialogHeader>
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                     <Label>Name *</Label>
                     <Input
                        {...register('name', { required: true })}
                        className="mt-1"
                     />
                  </div>
                  <div>
                     <Label>Role</Label>
                     <Input {...register('role')} className="mt-1" />
                  </div>
                  <div>
                     <Label>Quote *</Label>
                     <Textarea
                        {...register('quote', { required: true })}
                        className="mt-1 h-24"
                     />
                  </div>
                  <div>
                     <Label>Avatar URL</Label>
                     <Input {...register('avatarUrl')} className="mt-1" />
                  </div>
                  <div>
                     <Label>Sort Order</Label>
                     <Input
                        type="number"
                        {...register('sortOrder', { valueAsNumber: true })}
                        className="mt-1"
                     />
                  </div>
                  <div className="flex items-center gap-2">
                     <Switch
                        checked={isActive}
                        onCheckedChange={(v) => setValue('isActive', v)}
                     />
                     <Label>Active</Label>
                  </div>
                  <DialogFooter>
                     <Button type="submit" disabled={saving}>
                        {saving ? 'Saving…' : 'Save'}
                     </Button>
                  </DialogFooter>
               </form>
            </DialogContent>
         </Dialog>
      </div>
   )
}
