import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitForm } from "@/lib/submitForm";
import { /*Upload,*/ Building2, FileText, ShieldCheck } from "lucide-react";

const tradeCategories = [
  "Plumbing",
  "Electrical",
  "HVAC",
  "Roofing",
  "General Maintenance",
  "Painting",
  "Flooring",
  "Landscaping",
  "Trash Out / Cleanout",
  "Handyman",
  "Doors & Windows",
  "Other",
];

const BecomeAVendor = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  // const [glInsurance, setGlInsurance] = useState(false);
  // const [wcInsurance, setWcInsurance] = useState(false);
  // const [w9File, setW9File] = useState<File | null>(null);
  // const [insuranceFile, setInsuranceFile] = useState<File | null>(null);
  const [tradeCategory, setTradeCategory] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const fields: Record<string, string> = {};
    formData.forEach((v, k) => {
      if (typeof v === "string" && k !== "_hp") fields[k] = v;
    });
    fields.trade_category = tradeCategory;

    const result = await submitForm("vendor", fields, String(formData.get("_hp") ?? ""));
    setSubmitting(false);

    if (result.ok) {
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you within 48 hours.",
      });
      form.reset();
      setTradeCategory("");
    } else {
      toast({
        title: "Submission Failed",
        description: result.error,
        variant: "destructive",
      });
    }
  };

  return (
    <main className="pt-24">
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-4">
              Become a <span className="text-gradient">Partner</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Join AssetGuard LLC's trusted vendor network. Complete the application below and our team will review your credentials.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-10"
          >
            {/* Honeypot: hidden from humans, bots fill it */}
            <input type="text" name="_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            {/* Contact Information */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="text-primary" size={18} />
                </div>
                <h2 className="text-xl font-heading font-bold text-foreground">Contact Information</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" name="first_name" placeholder="John" required maxLength={50} className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" name="last_name" placeholder="Doe" required maxLength={50} className="rounded-lg" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="vendorPhone">Phone Number *</Label>
                  <Input id="vendorPhone" name="phone" type="tel" placeholder="(555) 123-4567" required maxLength={20} className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vendorEmail">Email Address *</Label>
                  <Input id="vendorEmail" name="email" type="email" placeholder="john@company.com" required maxLength={200} className="rounded-lg" />
                </div>
              </div>
            </div>

            {/* Business Details */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="text-primary" size={18} />
                </div>
                <h2 className="text-xl font-heading font-bold text-foreground">Business Details</h2>
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input id="companyName" name="company_name" placeholder="ABC Plumbing LLC" required maxLength={100} className="rounded-lg" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="streetAddress">Street Address *</Label>
                <Input id="streetAddress" name="street_address" placeholder="123 Main St" required maxLength={200} className="rounded-lg" />
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" name="city" placeholder="El Paso" required maxLength={100} className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Input id="state" name="state" placeholder="TX" required maxLength={50} className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip Code *</Label>
                  <Input id="zip" name="zip" placeholder="79902" required maxLength={10} className="rounded-lg" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website URL</Label>
                <Input id="website" name="website" type="url" placeholder="https://yourcompany.com" maxLength={200} className="rounded-lg" />
              </div>
            </div>

            {/* Professional Credentials */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="text-primary" size={18} />
                </div>
                <h2 className="text-xl font-heading font-bold text-foreground">Professional Credentials</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="ein">EIN (Tax ID Number) *</Label>
                  <Input id="ein" name="ein" placeholder="XX-XXXXXXX" required maxLength={20} className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label>Trade / Service Category *</Label>
                  <Select required value={tradeCategory} onValueChange={setTradeCategory}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select your trade" />
                    </SelectTrigger>
                    <SelectContent>
                      {tradeCategories.map((t) => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/*
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
                  <Label htmlFor="gl-insurance" className="cursor-pointer">General Liability Insurance</Label>
                  <Switch id="gl-insurance" checked={glInsurance} onCheckedChange={setGlInsurance} />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
                  <Label htmlFor="wc-insurance" className="cursor-pointer">Workers' Comp Insurance</Label>
                  <Switch id="wc-insurance" checked={wcInsurance} onCheckedChange={setWcInsurance} />
                </div>
              </div>
            */}
            </div>
            {/* Service Area */}
            <div className="space-y-5">
              <h2 className="text-xl font-heading font-bold text-foreground">Service Area</h2>
              <div className="space-y-2">
                <Label htmlFor="serviceArea">Counties / Regions Served *</Label>
                <Textarea
                  id="serviceArea"
                  name="service_area"
                  placeholder="e.g. El Paso County, Hudspeth County..."
                  rows={3}
                  required
                  maxLength={500}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            {/* Document Upload
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Upload className="text-primary" size={18} />
                </div>
                <h2 className="text-xl font-heading font-bold text-foreground">Documentation Upload</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <label
                  htmlFor="w9Upload"
                  className="flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border bg-card p-8 cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <Upload className="text-muted-foreground" size={28} />
                  <span className="text-sm font-medium text-foreground">Upload W-9</span>
                  <span className="text-xs text-muted-foreground">
                    {w9File ? w9File.name : "PDF, JPG, or PNG (max 10MB)"}
                  </span>
                  <input
                    id="w9Upload"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    onChange={(e) => setW9File(e.target.files?.[0] || null)}
                  />
                </label>
                <label
                  htmlFor="insuranceUpload"
                  className="flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border bg-card p-8 cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <Upload className="text-muted-foreground" size={28} />
                  <span className="text-sm font-medium text-foreground">Upload Insurance Certificates</span>
                  <span className="text-xs text-muted-foreground">
                    {insuranceFile ? insuranceFile.name : "PDF, JPG, or PNG (max 10MB)"}
                  </span>
                  <input
                    id="insuranceUpload"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    onChange={(e) => setInsuranceFile(e.target.files?.[0] || null)}
                  />
                </label>
              </div>
            </div>
 */}
            <Button type="submit" size="lg" className="w-full text-base font-semibold rounded-lg" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Application"}
            </Button>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default BecomeAVendor;
