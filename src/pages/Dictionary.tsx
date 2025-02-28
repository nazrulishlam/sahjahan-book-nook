
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { books } from '@/data/books';
import { Book } from '@/types/books';

const Dictionary = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(
    books.filter(book => book.category === 'Dictionary')
  );

  const languages = [
    "English",
    "Hindi",
    "Bengali",
    "Tamil",
    "Telugu",
    "Marathi",
    "Multi-language"
  ];

  const types = [
    "General",
    "Pocket",
    "Illustrated",
    "Technical",
    "Thesaurus",
    "Learner's"
  ];

  const handleSearch = () => {
    const filtered = books.filter((book) => {
      const matchLanguage = !selectedLanguage || book.language === selectedLanguage;
      const matchType = !selectedType || book.dictionaryType === selectedType;
      return matchLanguage && matchType && book.category === 'Dictionary';
    });
    setFilteredBooks(filtered);
  };

  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-bookstore-navy mb-8">Dictionary</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <Select onValueChange={setSelectedLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((language) => (
                      <SelectItem key={language} value={language}>{language}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <Select onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {types.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="mt-6 w-full" onClick={handleSearch}>
              Search Dictionaries
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-bookstore-navy mb-2">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">By {book.author}</p>
                  <p className="text-sm text-gray-600">Language: {book.language}</p>
                  <p className="text-sm text-gray-600">Type: {book.dictionaryType}</p>
                  <p className="text-lg font-bold text-bookstore-navy mt-2">₹{book.price}</p>
                  <Button className="w-full mt-4">Add to Cart</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dictionary;
