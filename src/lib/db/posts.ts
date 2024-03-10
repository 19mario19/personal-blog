import { BlogCategory, PersonName } from "$lib/types/types"
import type { BlogPost } from "$lib/types/types"

const blogPosts: BlogPost[] = [
  {
    title: "The Power of Mindfulness in Daily Life",
    subtitle: "Embracing the Present Moment for Increased Well-being",
    content: [
      {
        description:
          "In our fast-paced world, it's easy to get caught up in the constant demands of work, relationships, and daily tasks. Mindfulness offers a powerful antidote to this perpetual state of busyness, helping us reconnect with the present moment and cultivate greater awareness and appreciation for the here and now.",
      },
      {
        subheading: "What is Mindfulness?",
      },
      {
        description:
          "Mindfulness is the practice of intentionally bringing one's attention to the present moment, without judgment. It involves observing our thoughts, emotions, and physical sensations with openness and curiosity, rather than getting caught up in them.",
      },
      {
        quote: {
          content:
            "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
          author: "Thich Nhat Hanh",
        },
      },
    ],
    category: BlogCategory.Art,
    author: {
      id: 1,
      name: PersonName.DenaliBella,
      description: "Writer and mindfulness practitioner",
    },
    createdAt: "2023-05-01",
  },
  {
    title: "Exploring the Vibrant Street Art of Melbourne",
    subtitle: "A Colorful Journey Through the City's Creative Corners",
    content: [
      {
        description:
          "Melbourne, the cultural capital of Australia, is renowned for its dynamic street art scene. From vibrant murals adorning alleyways to thought-provoking graffiti on urban walls, the city's streets are a living canvas that celebrates creativity and self-expression.",
      },
      {
        image: "https://example.com/melbourne-street-art.jpg",
      },
      {
        subheading: "Hosier Lane: A Street Art Mecca",
      },
      {
        description:
          "Hosier Lane, nestled in the heart of Melbourne's CBD, is a must-visit destination for street art enthusiasts. This iconic laneway is a kaleidoscope of colors, with every inch of its walls covered in intricate murals and graffiti art.",
      },
      {
        ul: [
          "Explore the ever-changing artworks",
          "Witness the fusion of styles and techniques",
          "Capture stunning photographs",
        ],
      },
    ],
    category: BlogCategory.Travel,
    author: {
      id: 2,
      name: PersonName.DenaliBella,
      description: "Travel writer and photographer",
    },
    createdAt: "2023-04-15",
  },
  {
    title:
      "The Rise of Sustainable Fashion: Embracing Ethical and Eco-Friendly Choices",
    subtitle: "Redefining Style with Purpose",
    content: [
      {
        description:
          "As consumers become more conscious of the environmental and social impact of the fashion industry, sustainable fashion has emerged as a powerful movement. Embracing ethical and eco-friendly choices, this trend challenges the traditional fast fashion model and encourages a more mindful approach to style.",
      },
      {
        image: "https://example.com/sustainable-fashion.jpg",
      },
      {
        subheading: "What is Sustainable Fashion?",
      },
      {
        description:
          "Sustainable fashion encompasses a range of practices and philosophies that aim to reduce the negative impact of the fashion industry on the planet and its people. It involves the use of eco-friendly materials, ethical labor practices, and a commitment to minimizing waste and overconsumption.",
      },
      {
        ol: [
          "Organic and recycled fabrics",
          "Fair trade and ethical manufacturing",
          "Slow fashion and capsule wardrobes",
          "Upcycling and repurposing clothing",
        ],
      },
    ],
    category: BlogCategory.Art,
    author: {
      id: 3,
      name: PersonName.DenaliBella,
      description: "Fashion writer and sustainability advocate",
    },
    createdAt: "2023-03-20",
  },
  {
    title:
      "Mastering the Art of Mindful Eating: A Path to Better Health and Well-being",
    subtitle: "Rediscovering the Joy of Food and Nourishing the Body and Mind",
    content: [
      {
        description:
          "In our fast-paced lives, we often treat eating as a mere necessity, mindlessly consuming food without truly appreciating its flavors, textures, and nourishing properties. Mindful eating offers a transformative approach, encouraging us to slow down, savor each bite, and cultivate a deeper connection with our food and our bodies.",
      },
      {
        image: "https://example.com/mindful-eating.jpg",
      },
      {
        subheading: "The Benefits of Mindful Eating",
      },
      {
        description:
          "By practicing mindful eating, we can unlock numerous benefits for our physical and mental well-being. It can help us develop a healthier relationship with food, increase our awareness of hunger and fullness cues, and promote better digestion and nutrient absorption.",
      },
      {
        ul: [
          "Improved digestion and nutrient absorption",
          "Increased awareness of hunger and fullness cues",
          "Reduced emotional and stress-related eating",
          "Enhanced appreciation for food and flavors",
        ],
      },
    ],
    category: BlogCategory.Art,
    author: {
      id: 4,
      name: PersonName.DenaliBella,
      description: "Health and wellness writer",
    },
    createdAt: "2023-02-10",
  },
  {
    title: "Unleashing the Power of Artificial Intelligence in Healthcare",
    subtitle: "How AI is Transforming Medical Diagnostics and Treatment",
    content: [
      {
        description:
          "Artificial Intelligence (AI) has emerged as a game-changing technology in the healthcare industry, revolutionizing the way medical professionals diagnose and treat various conditions. From early disease detection to personalized treatment plans, AI is ushering in a new era of precision medicine, promising to improve patient outcomes and save countless lives.",
      },
      {
        image: "https://example.com/ai-healthcare.jpg",
      },
      {
        subheading: "AI in Medical Imaging and Diagnostics",
      },
      {
        description:
          "One of the most significant applications of AI in healthcare is in medical imaging and diagnostics. Advanced machine learning algorithms can analyze vast amounts of medical data, including X-rays, CT scans, and MRI images, with unparalleled accuracy and speed.",
      },
      {
        quote: {
          content:
            "AI has the potential to revolutionize medical practice by providing clinicians with powerful tools to improve the accuracy and efficiency of diagnosis and treatment.",
          author: "Dr. Eric Topol, Cardiologist and Author",
        },
      },
    ],
    category: BlogCategory.Tech,
    author: {
      id: 5,
      name: PersonName.DenaliBella,
      description: "Technology writer and AI enthusiast",
    },
    createdAt: "2023-01-25",
  },
]

export { blogPosts }
