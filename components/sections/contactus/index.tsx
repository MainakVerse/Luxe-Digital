"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

// Types
interface PhotoshootFormData {
  name: string;
  email: string;
  purpose: string;
  fieldA: string;
  fieldB: string;
}

interface ModellingFormData {
  name: string;
  email: string;
  experience: string;
  portfolio: string;
  availability: string;
}

interface JoinLuxeFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  timeline: string;
}

type FormData = PhotoshootFormData | ModellingFormData | JoinLuxeFormData;

interface AlertProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

type TabType = "photoshoot" | "modelling" | "joinluxe";

// Alert Component
const CustomAlert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      role="alert"
      className={`rounded-md p-4 ${
        type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
      } flex items-center justify-between`}
    >
      <p>{message}</p>
      <button
        onClick={onClose}
        className="ml-4 text-current transition-opacity hover:opacity-70"
        aria-label="Close alert"
      >
        ×
      </button>
    </motion.div>
  );
};

// Tab Button Component
const TabButton: React.FC<{
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ isActive, onClick, children }) => (
  <button
    onClick={onClick}
    className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg shadow-yellow-400/25"
        : "border border-yellow-400/30 text-yellow-400 hover:border-yellow-400/60 hover:bg-yellow-400/5"
    }`}
  >
    {children}
  </button>
);

// Form Fields Components
const PhotoshootForm: React.FC<{
  register: any;
  errors: any;
}> = ({ register, errors }) => (
  <>
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-yellow-400 mb-2">
        Name
      </label>
      <input
        {...register("name", { required: "Name is required" })}
        type="text"
        id="name"
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
        placeholder="Your Name"
      />
      {errors.name && (
        <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-2">
        Email
      </label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address",
          },
        })}
        type="email"
        id="email"
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
        placeholder="you@example.com"
      />
      {errors.email && (
        <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="purpose" className="block text-sm font-medium text-yellow-400 mb-2">
        Purpose
      </label>
      <textarea
        {...register("purpose", { required: "Purpose is required" })}
        id="purpose"
        rows={3}
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
        placeholder="Describe your photoshoot requirements"
      />
      {errors.purpose && (
        <p className="mt-1 text-sm text-red-400">{errors.purpose.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="fieldA" className="block text-sm font-medium text-yellow-400 mb-2">
        Field A
      </label>
      <input
        {...register("fieldA", { required: "Field A is required" })}
        type="text"
        id="fieldA"
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
        placeholder="Additional information"
      />
      {errors.fieldA && (
        <p className="mt-1 text-sm text-red-400">{errors.fieldA.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="fieldB" className="block text-sm font-medium text-yellow-400 mb-2">
        Field B
      </label>
      <input
        {...register("fieldB", { required: "Field B is required" })}
        type="text"
        id="fieldB"
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
        placeholder="Additional details"
      />
      {errors.fieldB && (
        <p className="mt-1 text-sm text-red-400">{errors.fieldB.message}</p>
      )}
    </div>
  </>
);

const ModellingForm: React.FC<{
  register: any;
  errors: any;
}> = ({ register, errors }) => (
  <>
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-yellow-400 mb-2">
        Name
      </label>
      <input
        {...register("name", { required: "Name is required" })}
        type="text"
        id="name"
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
        placeholder="Your Name"
      />
      {errors.name && (
        <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-2">
        Email
      </label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address",
          },
        })}
        type="email"
        id="email"
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
        placeholder="you@example.com"
      />
      {errors.email && (
        <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="experience" className="block text-sm font-medium text-yellow-400 mb-2">
        Experience
      </label>
      <select
        {...register("experience", { required: "Experience level is required" })}
        id="experience"
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
      >
        <option value="">Select experience level</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="professional">Professional</option>
      </select>
      {errors.experience && (
        <p className="mt-1 text-sm text-red-400">{errors.experience.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="portfolio" className="block text-sm font-medium text-yellow-400 mb-2">
        Portfolio
      </label>
      <input
        {...register("portfolio")}
        type="url"
        id="portfolio"
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
        placeholder="Portfolio URL (optional)"
      />
    </div>

    <div>
      <label htmlFor="availability" className="block text-sm font-medium text-yellow-400 mb-2">
        Availability
      </label>
      <textarea
        {...register("availability", { required: "Availability is required" })}
        id="availability"
        rows={3}
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
        placeholder="When are you available?"
      />
      {errors.availability && (
        <p className="mt-1 text-sm text-red-400">{errors.availability.message}</p>
      )}
    </div>
  </>
);

const JoinLuxeForm: React.FC<{
  register: any;
  errors: any;
}> = ({ register, errors }) => (
  <>
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-yellow-400 mb-2">
        Name
      </label>
      <input
        {...register("name", { required: "Name is required" })}
        type="text"
        id="name"
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
        placeholder="Your Name"
      />
      {errors.name && (
        <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-2">
        Email
      </label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address",
          },
        })}
        type="email"
        id="email"
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
        placeholder="you@example.com"
      />
      {errors.email && (
        <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="service" className="block text-sm font-medium text-yellow-400 mb-2">
        Service
      </label>
      <select
        {...register("service", { required: "Service is required" })}
        id="service"
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
      >
        <option value="">Select a service</option>
        <option value="luxury-events">Luxury Events</option>
        <option value="premium-photography">Premium Photography</option>
        <option value="exclusive-modeling">Exclusive Modeling</option>
        <option value="brand-partnerships">Brand Partnerships</option>
      </select>
      {errors.service && (
        <p className="mt-1 text-sm text-red-400">{errors.service.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="budget" className="block text-sm font-medium text-yellow-400 mb-2">
        Budget
      </label>
      <select
        {...register("budget", { required: "Budget range is required" })}
        id="budget"
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
      >
        <option value="">Select budget range</option>
        <option value="5k-15k">₹5,000 - ₹15,000</option>
        <option value="15k-50k">₹15,000 - ₹50,000</option>
        <option value="50k-100k">₹50,000 - ₹1,00,000</option>
        <option value="100k+">₹1,00,000+</option>
      </select>
      {errors.budget && (
        <p className="mt-1 text-sm text-red-400">{errors.budget.message}</p>
      )}
    </div>

    <div>
      <label htmlFor="timeline" className="block text-sm font-medium text-yellow-400 mb-2">
        Timeline
      </label>
      <textarea
        {...register("timeline", { required: "Timeline is required" })}
        id="timeline"
        rows={3}
        className="w-full rounded-lg border border-yellow-400/30 bg-black/80 px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
        placeholder="When do you need this service?"
      />
      {errors.timeline && (
        <p className="mt-1 text-sm text-red-400">{errors.timeline.message}</p>
      )}
    </div>
  </>
);

// Main Contact Section Component
export const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("photoshoot");
  const [direction, setDirection] = useState(0);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tabs: { key: TabType; label: string; order: number }[] = [
    { key: "photoshoot", label: "Photoshoot", order: 0 },
    { key: "modelling", label: "Modelling", order: 1 },
    { key: "joinluxe", label: "Join Luxe", order: 2 },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const clearStatus = () => {
    setSubmitStatus({ type: null, message: "" });
  };

  const handleTabChange = (newTab: TabType) => {
    if (newTab === activeTab) return;
    
    const currentOrder = tabs.find(t => t.key === activeTab)?.order || 0;
    const newOrder = tabs.find(t => t.key === newTab)?.order || 0;
    
    setDirection(newOrder > currentOrder ? 1 : -1);
    setActiveTab(newTab);
    reset();
  };

  const onSubmit = async (formData: FormData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      let submissionData: any = {};
      
      if (activeTab === "photoshoot") {
        const data = formData as PhotoshootFormData;
        submissionData = {
          yourName: data.name,
          yourEmail: data.email,
          yourMessage: `Purpose: ${data.purpose}\nField A: ${data.fieldA}\nField B: ${data.fieldB}`,
          formType: "Photoshoot"
        };
      } else if (activeTab === "modelling") {
        const data = formData as ModellingFormData;
        submissionData = {
          yourName: data.name,
          yourEmail: data.email,
          yourMessage: `Experience: ${data.experience}\nPortfolio: ${data.portfolio || 'Not provided'}\nAvailability: ${data.availability}`,
          formType: "Modelling"
        };
      } else if (activeTab === "joinluxe") {
        const data = formData as JoinLuxeFormData;
        submissionData = {
          yourName: data.name,
          yourEmail: data.email,
          yourMessage: `Service: ${data.service}\nBudget: ${data.budget}\nTimeline: ${data.timeline}`,
          formType: "Join Luxe"
        };
      }

      await fetch(
        "https://script.google.com/macros/s/AKfycbzg4wI44N1r7QFimHsGlhOMhzDymKSO-qCBn9A6MfHh6W5JQlADok6wbmApjbFMg8KURQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
          mode: "no-cors",
        }
      );

      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon.",
      });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit form. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const renderForm = () => {
    switch (activeTab) {
      case "photoshoot":
        return <PhotoshootForm register={register} errors={errors} />;
      case "modelling":
        return <ModellingForm register={register} errors={errors} />;
      case "joinluxe":
        return <JoinLuxeForm register={register} errors={errors} />;
      default:
        return <PhotoshootForm register={register} errors={errors} />;
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              CONTACT
            </span>{" "}
            <span className="text-white">US</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Ready to create something extraordinary together?
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <TabButton
              key={tab.key}
              isActive={activeTab === tab.key}
              onClick={() => handleTabChange(tab.key)}
            >
              {tab.label}
            </TabButton>
          ))}
        </motion.div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-yellow-400/20 p-8 shadow-2xl shadow-yellow-400/5">
            {submitStatus.type && (
              <div className="mb-6">
                <CustomAlert
                  type={submitStatus.type}
                  message={submitStatus.message}
                  onClose={clearStatus}
                />
              </div>
            )}
            
            <div className="relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.form
                  key={activeTab}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {renderForm()}
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 py-4 text-black font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </motion.button>
                </motion.form>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};