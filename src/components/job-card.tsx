import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export interface Job {
  title: string;
  description: string;
  type: string[];
  postedAt: string;
  company: {
    name: string;
    logo?: string;
  };
}

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="mb-4 bg-gray-100">
      <CardContent className="flex items-start justify-between p-2 sm:p-6">
        <div className="flex gap-2">
          <Image
            src={job.company.logo || "/placeholder.svg"}
            alt={`${job.company.name} logo`}
            width={64}
            height={40}
            className="rounded-xl object-contain"
          />
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <h3 className="font-semibold">{job.title}</h3>
              <div className="flex gap-2">
                {job.type.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-[#E9D7FE] text-[#6941C6] hover:bg-[#E9D7FE]/80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{job.description}</p>
            <p className="text-sm text-muted-foreground">{job.postedAt}</p>
          </div>
        </div>
        <Button className="bg-[#6941C6] hover:bg-[#6941C6]/90 text-white">
          <span className="hidden sm:block">Apply Now</span>
          <span className="block sm:hidden">Apply</span>
        </Button>
      </CardContent>
    </Card>
  );
}
