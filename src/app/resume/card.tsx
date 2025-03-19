import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

type ExperienceCardProps = {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
};

type WritingCardProps = {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
};

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  color: string;
};

// Helper Components
const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  period,
  location,
  responsibilities,
}) => {
  return (
    <Card className="border shadow-sm hover:shadow-md transition-shadow dark:bg-accent-foreground">
      <CardHeader className="pb-2">
        <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <span className="text-xl">{position}</span>
            <span className="mx-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent font-medium hidden sm:inline">
              •
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent font-medium block sm:inline">
              {company}
            </span>
          </div>
          <Badge variant="outline" className="self-start sm:self-auto">
            {period}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-200 text-sm mb-3">
          <MapPin size={14} />
          <span>{location}</span>
        </div>
        <ul className="space-y-2 pl-5 list-disc marker:text-blue-500">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300/80">
              {responsibility}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const WritingCard: React.FC<WritingCardProps> = ({
  company,
  position,
  period,
  responsibilities,
}) => {
  return (
    <Card className="border shadow-sm hover:shadow-md transition-shadow dark:bg-accent-foreground">
      <CardHeader className="pb-2">
        <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <span className="text-xl">{position}</span>
            <span className="mx-2 text-blue-600 font-medium hidden sm:inline">
              •
            </span>
            <span className="text-blue-600 font-medium block sm:inline">
              {company}
            </span>
          </div>
          <Badge variant="outline" className="self-start sm:self-auto">
            {period}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 pl-5 list-disc marker:text-blue-500">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300/80">
              {responsibility}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  color,
}) => {
  return (
    <Card
      className={`border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 ${color} bg-opacity-40`}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-700 dark:text-gray-300/80 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-white bg-opacity-60"
            >
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { ExperienceCard, WritingCard, ProjectCard };
