function Features() {
  const features = [
    {
      title: "Real-Time Editing",
      description:
        "Collaborate with multiple users instantly without refreshing",
    },
    {
      title: "Secure Access",
      description:
        "Protected authentication and secure document sharing",
    },
    {
      title: "Cloud Sync",
      description:
        "Your documents are automatically saved and synced online",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg"
            >
              
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-black dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;
